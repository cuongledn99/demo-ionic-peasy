import React, { useEffect } from 'react';
import './App.css';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,

} from '@ionic/react';
import DataFetching from './DataFetching';
import { useStoreState, useStoreActions } from 'easy-peasy';


function App() {

  const products = useStoreState((state) => state.products);
  const fetchProduct = useStoreActions((actions) => actions.fetchProduct);
  useEffect(() => {
    // console.log("Start use effect")
    fetchProduct()
  }, [])
  return (
    <div className="App">
      <IonApp>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>News App v1.0</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            {/* <IonItem>
              <DataFetching />

            </IonItem> */}
            {
              products.map(item => {
                return <IonItem>{item.name}</IonItem>
              })
            }
          </IonList>
        </IonContent>
      </IonApp>
    </div>

  );

}

export default App;
