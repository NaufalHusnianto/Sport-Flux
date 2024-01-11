import React from "react";
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';

function PersonItemContent({ name, category, location, tag, rating }) {
    return (
        <>
                <IonCard color={"secondary"} className="ms-0 me-0 mt-3 mb-3  rounded-4" style={{boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)' }}>
                    <IonGrid>
                        <IonRow style={{ display: 'flex', height: '100%', borderRadius: '20px', overflow: 'hidden' }}>
                            <IonCol size='4' className='text-center text-white d-flex flex-column justify-content-center m-0'>
                                <IonImg src='/profile.png' style={{ background: 'green', boxShadow: '2px 2px black', borderRadius: '20px' }} />
                            </IonCol>
                            <IonCol size='8' className='text-left text-white d-flex flex-column justify-content-center'>
                                <p className="fw-bold" style={{ fontSize: '.8rem' }}>{category}</p>
                                <p className="fs-8">{name}</p>
                                <p className="fs-8">rating: {rating}/5</p>
                                <p className="fs-8">{location}</p>
                                <p className="fs-8">{tag.map(tag=>(
                                    <span key={tag}>{tag} </span>
                                ))}</p>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCard>
        </>
    )
}

export default PersonItemContent;
