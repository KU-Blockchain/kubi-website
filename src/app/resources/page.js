'use client';
import React, { useEffect, useState } from "react";
import { Skeleton, Tag, Button, Heading, Center, Flex, Text, Box, Square, Image, HStack, VStack, Badge, Divider, Link, Tab, Tabs, TabList, TabPanels, TabPanel, SimpleGrid } from "@chakra-ui/react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import WebpageHeading from "@/components/PageHeading";
import { useLayout } from "@/contexts/LayoutContext";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

export default function ResearchPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [articles, setArticles] = useState([]);
  const [tavelDiaries, setTravelDiaries] = useState([]);
  const isMobile = useLayout();

  useEffect(() => {
    setIsModalOpen(true);
    (async() => {
      let articles_response = await fetch('/api/notion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "databaseId": "aaab73c527594caba4ee8be33c20b1cc" }),
      });

      articles_response = await articles_response.json();
      const publishedArticles = articles_response.results.filter(article => article.properties.Status.status.name === "Published");
      console.log("Articles:", publishedArticles);
      setArticles(publishedArticles);
    })();

    (async() => {
      let travel_response = await fetch('/api/notion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "databaseId": "eba3a8e3eaf941b1a3c19c5515c49192" }),
      });

      travel_response = await travel_response.json();
      const publishedTravelDiaries = travel_response.results.filter(diary => diary.properties.Status.status.name === "Published");
      console.log("Travel Diaries:", publishedTravelDiaries);
      setTravelDiaries(publishedTravelDiaries);
    })().then(() => setIsLoading(false));

  }, []); 

  return (
    <>
      {isMobile ? (
        <Box>
          <WebpageHeading heading={"Blockchain @ KU"} />

          <Tabs isFitted>
            <TabList>
              <Tab>Articles</Tab>
              <Tab>Block News</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>

              <Heading size="lg" mb={2} textAlign="center">
                Travel Diaries ✈️
              </Heading>

              <Skeleton isLoaded={!isLoading} fitContent={true}>
                <SimpleGrid columns={1} spacing={3} mb={10}>

                  {tavelDiaries.map(diary => (
                    <Card

                      borderRadius="20px"
                      borderWidth={0.5}
                      borderColor='gray.500'
                      //maxWidth={300}
                      key={diary.id}
                    >
                      <CardHeader pb={0}>
                        {diary.properties['Cover Photo'] && diary.properties['Cover Photo'].files.length > 0 && (
                          <Image mb={2} src={diary.properties['Cover Photo'].files[0].file.url} />
                        )}
                        <Heading size='md'>{diary.properties.Name.title[0].plain_text}</Heading>
                      </CardHeader>
                      <CardBody pt={1} pb={1}>
                        <Text pt={4}>Tags:
                          {diary.properties.Tags.multi_select.map(tag => (
                            <Tag m={1} key={tag.id} bg={tag.color}>{tag.name}</Tag>
                          ))}
                        </Text>
                      </CardBody>
                      <CardFooter>
                        <Button as={Link} isExternal href={diary.url}>Read article</Button>
                      </CardFooter>
                    </Card>
                  ),
                )}
              </SimpleGrid>
              </Skeleton>

              <Heading size="lg" mb={2} textAlign="center">
                Student Written Articles 📝
              </Heading>

              <Skeleton isLoaded={!isLoading} fitContent={true}>
                <SimpleGrid columns={1} spacing={3} mb={10}>
                    {articles.map(article => (
                      <Card
                        borderRadius="20px"
                        borderWidth={0.5}
                        borderColor='gray.500'
                        //maxWidth={300}
                        key={article.id}
                      >
                        <CardHeader pb={0}>
                          <Heading size='md'>{article.properties.Name.title[0].plain_text}</Heading>
                        </CardHeader>
                        <CardBody pt={1} pb={1}>
                          <Text>by {article.properties.Author.rich_text[0].plain_text}</Text>
                          <Text pt={4}>Tags: 
                            {article.properties.Tags.multi_select.map(tag => (
                              <Tag m={1} key={tag.id} bg={tag.color}>{tag.name}</Tag>
                            ))}
                          </Text>
                        </CardBody>
                        <CardFooter>
                          <Button as={Link} isExternal href={article.url}>Read article</Button>
                        </CardFooter>
                      </Card>
                    ),
                  )}
                </SimpleGrid>
              </Skeleton>

                <HStack paddingBottom={4}>
                  <Box w="30%">
                    <Image 
                      width="100%"
                      objectFit="cover"
                      borderRadius="full"
                      src="/images/WebsiteAssets/perry-alexander2.jpg"
                      alt="Perry"
                    />
                  </Box>
                  <Box w="70%">
                    <VStack align="flex-start">
                      <Text 
                        fontWeight={500} 
                        fontSize="2xl">
                          The University Blockchain Research Initiative (UBRI)
                      </Text>
                      <Text 
                        fontWeight={500} 
                        fontSize="large">
                          Dr. Perry Alexander
                      </Text>
                    </VStack>
                    <Link href='mailto:palexand@ku.edu'><Badge variant='outline'>Contact</Badge></Link> <Link href='https://perry.alexander.name/' isExternal><Badge variant='outline'>Personal Website</Badge></Link>
                  </Box>
                </HStack>
                <Text 
                  fontSize="medium"
                  paddingBottom={4}
                >
                    Dr. Perry Alexander is The AT&T Foundation Distinguished Professor of Electrical Engineering and Computer Science Department and Director of the Information and Telecommunication Technology Center at The University of Kansas. Dr. Alexander oversees the University Blockchain Research Initiative (UBRI) Grant of $2 million donated by Ripple for blockchain research and development at KU. His research interests include system-level modeling, formal verification, language semantics, and trusted computing.
                </Text>
                <Button colorScheme="blue" onClick={() => window.open("https://ripple.com/insights/on-campus-university-of-kansas-emphasizes-interdisciplinary-blockchain-study-for-budding-entrepreneurs/", "_blank")}>Learn More</Button>
              </TabPanel>

              <TabPanel>

                <Text 
                  fontWeight={500}
                  fontSize="large"
                  >
                    <Link href="/membership">Newsletter</Link>
                </Text>
                <Box w="100%" paddingBottom={4}>
                  Sign up to receive updates on the latest blockchain news and events.
                </Box>

                <Text 
                  fontWeight={500}
                  fontSize="large"
                  >
                    <Link href="https://kublockchain.notion.site/" isExternal>Notion Page</Link>
                </Text>
                <Box w="100%" paddingBottom={4}>
                  Explore our Foundations of Blockchain Bootcamp course.
                </Box>

                <Text 
                  fontWeight={500}
                  fontSize="large"
                  >
                    <Link href="https://www.youtube.com/@kublockchain" isExternal>YouTube Channel</Link>
                </Text>
                <Box w="100%" paddingBottom={4}>
                  View our latest videos, including a recap of the Kansas Blockchain Fellowship.
                </Box>
              </TabPanel>
            </TabPanels>

          </Tabs>

        </Box>
      ) : (
      <Box>

        <WebpageHeading heading={"Blockchain @ KU"} />

        <Flex> 
          <Box 
            w="80%" 
            p={2} 
          > {/* bg='blue' */}

            <Text 
              fontWeight={500} 
              fontSize="2xl"
              align="center"
              paddingBottom={4}
              >
                Travel Diaries ✈️
            </Text>

            <Skeleton isLoaded={!isLoading} fitContent={true}>
            <SimpleGrid columns={3} spacing={4} mb={10} mr={7}>
              {tavelDiaries.map(diary => (
                <Card
                  borderRadius="20px"
                  borderWidth={0.5}
                  borderColor='gray.500'
                  key={diary.id}
                >
                  <CardHeader pb={0}>
                    {diary.properties['Cover Photo'] && diary.properties['Cover Photo'].files.length > 0 && (
                      <Image mb={2} src={diary.properties['Cover Photo'].files[0].file.url} />
                    )}
                    <Heading size='md'>{diary.properties.Name.title[0].plain_text}</Heading>
                  </CardHeader>
                  <CardBody pt={1} pb={1}>
                    <Text pt={4}>Tags: 
                      {diary.properties.Tags.multi_select.map(tag => (
                        <Tag m={1} key={tag.id} bg={tag.color}>{tag.name}</Tag>
                      ))}
                    </Text>
                  </CardBody>
                  <CardFooter>
                    <Button as={Link} isExternal href={diary.url}>Read article</Button>
                  </CardFooter>
                </Card>
              ),
            )}
          </SimpleGrid>
          </Skeleton>

            <Text 
              fontWeight={500} 
              fontSize="2xl"
              align="center" 
              paddingBottom={4}
              >
                Student Written Articles 📝
            </Text>

            <Skeleton isLoaded={!isLoading} fitContent={true}>
            <SimpleGrid columns={3} spacing={4} mb={10} mr={7}>
              {articles.map(article => (
                <Card
                  borderRadius="20px"
                  borderWidth={0.5}
                  borderColor='gray.500'
                  key={article.id}
                >
                  <CardHeader pb={0}>
                    <Heading size='md'>{article.properties.Name.title[0].plain_text}</Heading>
                  </CardHeader>
                  <CardBody pt={1} pb={1}>
                    <Text>by {article.properties.Author.rich_text[0].plain_text}</Text>
                    <Text pt={4}>Tags: 
                      {article.properties.Tags.multi_select.map(tag => (
                        <Tag m={1} key={tag.id} bg={tag.color}>{tag.name}</Tag>
                      ))}
                    </Text>
                  </CardBody>
                  <CardFooter>
                    <Button as={Link} isExternal href={article.url}>Read article</Button>
                  </CardFooter>
                </Card>
              ),
            )}
          </SimpleGrid>
          </Skeleton>

            <HStack>
              <Box w="20%">
                <Image 
                  width="100%"
                  objectFit="cover"
                  borderRadius="full"
                  src="/images/WebsiteAssets/perry-alexander2.jpg"
                  alt="Perry"
                />
              </Box>
              <Box w="80%">
                <VStack align="flex-start">
                  <Text 
                    fontWeight={500} 
                    fontSize="2xl">
                      The University Blockchain Research Initiative (UBRI)
                  </Text>
                  <Text 
                    fontWeight={500} 
                    fontSize="large">
                      Dr. Perry Alexander <Link href='mailto:palexand@ku.edu'><Badge variant='outline'>Contact</Badge></Link> <Link href='https://perry.alexander.name/' isExternal><Badge variant='outline'>Personal Website</Badge></Link>
                  </Text>
                  
                  <Text 
                    fontSize="medium"
                    >
                      Dr. Perry Alexander is The AT&T Foundation Distinguished Professor of Electrical Engineering and Computer Science Department and Director of the Information and Telecommunication Technology Center at The University of Kansas. Dr. Alexander oversees the University Blockchain Research Initiative (UBRI) Grant of $2 million donated by Ripple for blockchain research and development at KU. His research interests include system-level modeling, formal verification, language semantics, and trusted computing.
                  </Text>
                  <Button onClick={() => window.open("https://ripple.com/insights/on-campus-university-of-kansas-emphasizes-interdisciplinary-blockchain-study-for-budding-entrepreneurs/", "_blank")}>Learn More</Button>
                </VStack>
              </Box>
            </HStack>
          </Box>
          

          <Divider orientation="vertical" height="auto" borderColor="gray.400" borderWidth="1" />

          <Box w="30%" p={2}> {/* bg='tomato' */}
            <Text 
              fontWeight={500} 
              fontSize="2xl"
              align="center"
              paddingBottom={4}
              >
                Block News
            </Text>

            <Text 
              fontWeight={500}
              fontSize="large"
              >
                <Link href="/membership#newsletter">Newsletter</Link>
            </Text>
            <Box w="100%" paddingBottom={4}>
              Sign up to receive updates on the latest blockchain news and events.
            </Box>

            <Text 
              fontWeight={500}
              fontSize="large"
              >
                <Link href="https://kublockchain.notion.site/" isExternal>Notion Page</Link>
            </Text>
            <Box w="100%" paddingBottom={4}>
              Explore our Foundations of Blockchain Bootcamp course.
            </Box>

            <Text 
              fontWeight={500}
              fontSize="large"
              >
                <Link href="https://www.youtube.com/@kublockchain" isExternal>YouTube Channel</Link>
            </Text>
            <Box w="100%" paddingBottom={4}>
              View our latest videos, including a recap of the Kansas Blockchain Fellowship.
            </Box>
          </Box>

        </Flex>

      </Box>
      )}

        <Modal isOpen={isModalOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader color="white">Resources from KUBI</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text color="white">
                Blockchain can be a confusing topic. Don&apos;t know where to start? KUBI&apos;s got you! <br></br><br></br>You will find plenty of resources here to expand your blockchain knowledge between Block Talks to explain the basics of blockchain, newsletters to highlight important blockchain topics, and articles written by our team to express the use cases of blockchain.
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => setIsModalOpen(false)}colorScheme="blue">
                Continue
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    </>
  );
}