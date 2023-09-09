import React from 'react'
import './ProjectDetail.scss'
import { Card, CardHeader, CardBody, Button, Heading, Stack, StackDivider, Text, FormControl, FormLabel, Input} from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'

const ProjectDetail = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const URL = 'http://localhost:8080/api/allTask'
  // const [data, setData] = useState([]); 

  return (

    <>
      <div className=''></div>
      <div className='container-cards'>
      <Card id='main-card'>
        <CardHeader>
          <Heading size='lg'>To Do</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            <div className='task'>
              <Heading size='xs' textTransform='uppercase' id='card-header'>
                Summary
                <div className='task-icons'>
                  <button onClick={onOpen}><EditIcon boxSize={4}/></button>
                  <button><DeleteIcon/></button>
                  <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                  >
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Create your account</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody pb={6}>
                        <FormControl>
                          <FormLabel>Nombre</FormLabel>
                          <Input ref={initialRef} placeholder='First name' />
                        </FormControl>

                        <FormControl mt={4}>
                          <FormLabel>Descirpción</FormLabel>
                          <Input placeholder='Last name' />
                        </FormControl>
                      </ModalBody>

                      <ModalFooter>
                        <Button colorScheme='blue' mr={3}>
                          Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </div>
              </Heading>
              <Text pt='2' fontSize='sm'>
                View a summary of all your clients over the last month.
              </Text>
            </div>
            <div className='task'>
              <Heading size='xs' textTransform='uppercase'>
                Overview
              </Heading>
              <Text pt='2' fontSize='sm'>
                Check out the overview of your clients.
              </Text>
            </div>
            <div className='task'>
              <Heading size='xs' textTransform='uppercase'>
                Analysis
              </Heading>
              <Text pt='2' fontSize='sm'>
                See a detailed analysis of all your business clients.
              </Text>
            </div>
          </Stack>
        </CardBody>
      </Card>
      
      <Card id='main-card'>
        <CardHeader>
          <Heading size='lg'>In Progress</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            <div className='task'>
              <Heading size='xs' textTransform='uppercase'>
                Summary
              </Heading>
              <Text pt='2' fontSize='sm'>
                View a summary of all your clients over the last month.
              </Text>
            </div>
            <div className='task'>
              <Heading size='xs' textTransform='uppercase'>
                Overview
              </Heading>
              <Text pt='2' fontSize='sm'>
                Check out the overview of your clients.
              </Text>
            </div>
            <div className='task'>
              <Heading size='xs' textTransform='uppercase'>
                Analysis
              </Heading>
              <Text pt='2' fontSize='sm'>
                See a detailed analysis of all your business clients.
              </Text>
            </div>
          </Stack>
        </CardBody>
      </Card>
      <Card id='main-card'>
        <CardHeader>
          <Heading size='lg'>Blocked</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            <div className='task'>
              <Heading size='xs' textTransform='uppercase'>
                Summary
              </Heading>
              <Text pt='2' fontSize='sm'>
                View a summary of all your clients over the last month.
              </Text>
            </div>
            <div className='task'>
              <Heading size='xs' textTransform='uppercase'>
                Overview
              </Heading>
              <Text pt='2' fontSize='sm'>
                Check out the overview of your clients.
              </Text>
            </div>
            <div className='task'>
              <Heading size='xs' textTransform='uppercase'>
                Analysis
              </Heading>
              <Text pt='2' fontSize='sm'>
                See a detailed analysis of all your business clients.
              </Text>
            </div>
          </Stack>
        </CardBody>
      </Card>
      <Card id='main-card'>
        <CardHeader>
          <Heading size='lg'>Done</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            <div className='task'>
              <Heading size='xs' textTransform='uppercase'>
                Summary
              </Heading>
              <Text pt='2' fontSize='sm'>
                View a summary of all your clients over the last month.
              </Text>
            </div>
            <div className='task'>
              <Heading size='xs' textTransform='uppercase'>
                Overview
              </Heading>
              <Text pt='2' fontSize='sm'>
                Check out the overview of your clients.
              </Text>
            </div>
            <div className='task'>
              <Heading size='xs' textTransform='uppercase'>
                Analysis
              </Heading>
              <Text pt='2' fontSize='sm'>
                See a detailed analysis of all your business clients.
              </Text>
            </div>
          </Stack>
        </CardBody>
      </Card>
      
      
    </div>
    </>
    
    
  )
}

export default ProjectDetail