import React from 'react';
import Image from 'next/image';
import ReviewsDetail from '../../../components/store/reviewsDetail';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

const people = [
    {
        name: 'Lombard Cafe',
        handle: 171,
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Dominos Pizza',
        handle: 62,
        imageUrl:
            'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Sunny Dispensary',
        handle: '9',
        imageUrl:
            'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: "David's waffles",
        handle: '789',
        imageUrl:
            'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]
export { people };

export const getServerSideProps: GetServerSideProps = async (context) => {
    const storeId = context.params?.eventId
    return {
      props: {
        storeId
      }
    }
  }
  
const Reviews = (props: { onCloseModal: any, setOpenRegister: any, storeId: InferGetServerSidePropsType<typeof getServerSideProps> }) => {

    return (
        <div className="m-3">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="flex-shrink-0 mr-2">
                    <div className="h-8 w-8 rounded-full relative overflow-hidden">
                        <Image alt="image" layout='fill' objectFit='contain'  src={people[Number(props.storeId)].imageUrl}></Image>
                    </div>
                </div>
                <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">{people[Number(props.storeId)].name}</h2>

            </div>
            <ReviewsDetail />
        </div>
    )
};

export default Reviews;