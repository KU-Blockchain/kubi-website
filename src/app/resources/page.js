'use client';
import React, { useEffect, useState } from "react";
import { Tag, Button, Heading, Center, Flex, Text, Box, Square, Image, HStack, VStack, Badge, Divider, Link, Tab, Tabs, TabList, TabPanels, TabPanel, SimpleGrid } from "@chakra-ui/react";
import WebpageHeading from "@/components/PageHeading";
import { useLayout } from "@/contexts/LayoutContext";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

export default function ResearchPage() {
  const [articles, setArticles] = useState([]);
  const isMobile = useLayout();

  useEffect(() => {
    (async() => {
      let response = await fetch('/api/notion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "databaseId": "aaab73c527594caba4ee8be33c20b1cc" }),
      });

      response = await response.json();
      console.log(response.results);
      setArticles(response.results);
    })();
  }, []); 

  return (
    <>
      {isMobile ? (
        <Box>
          <WebpageHeading heading={"Blockchain @ KU"} />

          <Tabs mx={6} isFitted>
            <TabList>
              <Tab>Articles</Tab>
              <Tab>Block News</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>

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
                    <Link href="/membership">Weekly Newsletter</Link>
                </Text>
                <Box w="100%" paddingBottom={4}>
                  Sign up to receive weekly updates on the latest blockchain news and events
                </Box>

                <Text 
                  fontWeight={500}
                  fontSize="large"
                  >
                    <Link href="https://kublockchain.notion.site/Foundations-of-Blockchain-7ff28f61d6c347feb624866d32f0242b" isExternal>Notion Page</Link>
                </Text>
                <Box w="100%" paddingBottom={4}>
                  Foundations of Blockchain Bootcamp, etc
                </Box>

                <Text 
                  fontWeight={500}
                  fontSize="large"
                  >
                    <Link href="https://www.youtube.com/@kublockchaininstitute9672" isExternal>YouTube Channel</Link>
                </Text>
                <Box w="100%" paddingBottom={4}>
                  Blockchain 101, etc
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
                Student Written Articles
            </Text>

            <SimpleGrid columns={3} spacing={7} mb={10} mr={7}>
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
                <Link href="/membership#newsletter">Weekly Newsletter</Link>
            </Text>
            <Box w="100%" paddingBottom={4}>
              Sign up to receive weekly updates on the latest blockchain news and events
            </Box>

            <Text 
              fontWeight={500}
              fontSize="large"
              >
                <Link href="https://kublockchain.notion.site/Foundations-of-Blockchain-7ff28f61d6c347feb624866d32f0242b" isExternal>Notion Page</Link>
            </Text>
            <Box w="100%" paddingBottom={4}>
              Foundations of Blockchain Bootcamp, etc
            </Box>

            <Text 
              fontWeight={500}
              fontSize="large"
              >
                <Link href="https://www.youtube.com/@kublockchaininstitute9672" isExternal>YouTube Channel</Link>
            </Text>
            <Box w="100%" paddingBottom={4}>
              Blockchain 101, etc
            </Box>
            
            <Text>Blockchain can be a confusing topic. Dont know where to start? KUBI&apos;s got you! You will find plenty of resources here to expand your blockchain knowledge between Block Talks to explain the basics of blockchain, weekly newsletters to highlight important blockchain topics, and articles written by our team to express the use cases of blockchain.</Text>
          </Box>

        </Flex>

      </Box>
      )}
    </>
  );
}