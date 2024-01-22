import { IonCard, IonAvatar } from "@ionic/react";
import React from "react";

interface ProviderChatProps {
    message: string;
    username: string;
}

class ProviderChat extends React.Component<ProviderChatProps> {
    constructor(props: ProviderChatProps) {
        super(props);
    }

    render() {
        const {message, username} = this.props

        return(
            <>
                <IonCard className="d-flex mb-1" style={{ background: 'rgba(0, 0, 0, 0)', boxShadow: 'none'}}>
                    <IonAvatar style={{ height: '100%', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                        <p className="bg-white text-black text-center rounded-pill" style={{ margin: 0, width: '100%' }}>{username}</p>
                    </IonAvatar>
                    <IonCard style={{ width: '80%', borderRadius: '20px' }} className="pt-3 pe-3 ps-3">
                        <p className="text-black">{message}</p>
                    </IonCard>
                </IonCard>
            </>
        );
    };
};

export default ProviderChat;