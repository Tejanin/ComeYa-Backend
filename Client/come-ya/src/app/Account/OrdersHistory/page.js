import { Card, CardHeader, CardBody, Heading, Text, Stack, StackDivider, Box, Image, flexbox } from '@chakra-ui/react'
import styles from './OrdersHistory.module.css'
import Link from 'next/link'

const OrdersHistory = () => {

  const orders = [
    {
      "code": "ORDER-d6c5797e1",
      "amount": 3239.1,
      "date": "12/31/2023 8:19:46 PM",
      "receipt": "https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xT0ZnbjFCRk11SUM0T0k0KMCex6wGMgboglW5NSU6LBbuTr7LyVo6TgpM3_zu5EdUqkOfX93ykIkfYkMZ8-QEt3oP28Z6ZhoWlsQw",
      "status": "En camino",
      "taxes": 583.04,
      "items": [
        {
          "name": "OREO McFlurry",
          "image": "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
          "description": null,
          "quantity": 5,
          "price": 359.19,
          "amount": 1795.95,
          "taxes": 323.27
        },
        {
          "name": "Big Mac",
          "image": "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
          "description": null,
          "quantity": 3,
          "price": 481.05,
          "amount": 1443.15,
          "taxes": 259.77
        }
      ]
    },
    {
      "code": "ORDER-3tw4g55",
      "amount": 6778.2,
      "date": "01/02/2024 9:12:36 AM",
      "receipt": "https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xT0ZnbjFCRk11SUM0T0k0KMCex6wGMgboglW5NSU6LBbuTr7LyVo6TgpM3_zu5EdUqkOfX93ykIkfYkMZ8-QEt3oP28Z6ZhoWlsQw",
      "status": "Entregado",
      "taxes": 234.04,
      "items": [
        {
          "name": "Big Box Plus",
          "image": "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
          "description": null,
          "quantity": 2,
          "price": 359.19,
          "amount": 718.38,
          "taxes": 323.27
        },
        {
          "name": "Ensalada César",
          "image": "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
          "description": null,
          "quantity": 7,
          "price": 350,
          "amount": 2450,
          "taxes": 259.77
        }
      ]
    },
    {
      "code": "ORDER-8sdf34g",
      "amount": 4500.75,
      "date": "01/05/2024 3:45:21 PM",
      "receipt": "https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xT0ZnbjFCRk11SUM0T0k0KMCex6wGMgboglW5NSU6LBbuTr7LyVo6TgpM3_zu5EdUqkOfX93ykIkfYkMZ8-QEt3oP28Z6ZhoWlsQw",
      "status": "En camino",
      "taxes": 675.34,
      "items": [
        {
          "name": "Chicken Alfredo Pasta",
          "image": "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
          "description": "Creamy pasta with grilled chicken and Alfredo sauce.",
          "quantity": 2,
          "price": 1200.50,
          "amount": 2401.00,
          "taxes": 432.18
        },
        {
          "name": "Margherita Pizza",
          "image": "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
          "description": "Classic pizza with tomato, mozzarella, and basil.",
          "quantity": 1,
          "price": 800.25,
          "amount": 800.25,
          "taxes": 143.82
        }
      ]
    },
    {
      "code": "ORDER-1a2b3c",
      "amount": 25.99,
      "date": "03/15/2024 1:30:45 PM",
      "receipt": "https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xT0ZnbjFCRk11SUM0T0k0KMCex6wGMgboglW5NSU6LBbuTr7LyVo6TgpM3_zu5EdUqkOfX93ykIkfYkMZ8-QEt3oP28Z6ZhoWlsQw",
      "status": "Entregado",
      "taxes": 5.20,
      "items": [
        {
          "name": "Hamburguesa clásica",
          "image": "https://example.com/burger.jpg",
          "description": "Deliciosa hamburguesa con queso y lechuga.",
          "quantity": 1,
          "price": 12.99,
          "amount": 12.99,
          "taxes": 2.60
        },
      ]
    },
  ]

  return(
    <div className={styles.mainConteiner}>
      <div className={styles.tittle}>
        <Heading>Historial de ordenes</Heading>
      </div>
      <div className={styles.historyConteiner}>
        {orders.map((order, index) => {
          return(
            <div key={index}>
              <Card mb={4} variant={'elevated'}>
                <CardHeader>
                  <div className={styles.headerInfo}>
                    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'flex-start'} gap={1}>
                      <Box>
                        <Heading size='md'>{order.code}</Heading>
                        <Text size='md' color='gray.500'>{order.date}</Text>
                      </Box>
                      <Text size='md' as='em' color={order.status === 'Entregado' ? 'green.500' : 'red.500'}>{order.status}</Text>
                      <button className={styles.viewReceipt}>
                        <Link target="_blank" rel="noopener noreferrer" href={order.receipt}>
                          Ver Recibo
                        </Link>
                      </button>
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'flex-end'} gap={1}>
                      <Text size='sm' as='b'>Costos: ${order.amount}</Text>
                      <Text size='sm' as='b'>Taxes: ${order.taxes}</Text>
                      <Text size='sm' as='b'>Total: ${(order.amount + order.taxes).toFixed(2)}</Text> 
                    </Box>
                  </div>
                </CardHeader>
                <CardBody backgroundColor={'rgba(0, 0, 0, 0.05)'}>
                  <Stack divider={<StackDivider/>} spacing='4'>
                    {order.items.map((item, index) => {
                      return(
                        <div key={index} className={styles.bodyInfo}>
                          <div className={styles.leftBodyInfo}>
                            <Image 
                              src={item.image}
                              width={85}
                              height={85}
                              borderRadius={'5%'}
                              objectFit='cover'
                              fallbackSrc={'https://via.placeholder.com/85x85'}
                              />
                            <Heading size='xs' textTransform='uppercase'>{item.name}</Heading>
                          </div>
                          <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'flex-end'}>
                            <Text pt='2' fontSize='sm'>x{item.quantity}</Text>
                            <Text pt='2' fontSize='sm'>Precio: ${item.price}</Text>
                            <Text pt='2' fontSize='sm'>Costo: ${item.amount}</Text>
                            <Text pt='2' fontSize='sm'>Tax: ${item.taxes}</Text>
                          </Box>
                        </div>
                      )
                    })}
                  </Stack>
                </CardBody>
              </Card>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default OrdersHistory;