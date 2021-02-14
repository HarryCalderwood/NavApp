import React from 'react';
import { TouchableOpacity, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import { styles } from '../../styles/styles'
import { FontAwesome5 } from "@expo/vector-icons";
import { Card, Title, Paragraph, Text, Appbar, Button } from 'react-native-paper';

const Briefing = () => {


    state = {
        card: [],
        coordinates: [
            {
                name: 'Belfast Center',
                text: 'The capitol of Northern Ireland, the land of saints and scholars',
                latitude: 54.5773910388331,
                longitude: -5.93316118797817,
                image: require('../../images/BelCityCent.jpg'),
                date: '12.05.2020',
                time: '16.00',
                recordedBy: 'John Smith',

            },
            {
                name: 'Cookstown',
                text: 'Possible enemy stronghold.',
                latitude: 54.422037190962506,
                longitude: -5.905058609965918,
                image: require('../../images/cookstown.jpg'),
                date: '10.10.2020',
                time: '11.05',
                recordedBy: 'John Rambo',

            },
            {
                name: 'Ballynahinch',
                text: 'Safe passage to all NGOs.',
                latitude: 54.402710887042254,
                longitude: -6.61196033274613,
                image: require('../../images/Ballynahinch.jpg'),
                date: '01/02/2021',
                time: '22.30',
                recordedBy: 'Srgt Jennifer Thompson'
            },
            {
                name: 'St Johns Castle',
                text: 'Overnight base for the squade',
                latitude: 54.70785132594203,
                longitude: -6.723754731546966,
                image: require('../../images/Armagh.jpg'),
                date: '30.09.2020',
                time: '00.02',
                recordedBy: 'Joe Bloggs'
            },
        ]
    }


    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.Content title="Green Zone" subtitle="Green Jackets" />
                <Appbar.Action icon="magnify" />
                <Appbar.Action icon="dots-vertical" />
            </Appbar.Header>
            
            <View style={styles.labelContainer}>
                <Button mode="contained" >Green Zone</Button>
                <Button mode="contained"  >Blue Zone</Button>
                <Button mode="contained" >Red Zone</Button>
            </View>

            <View style = {styles.flex12Container}>

            <ScrollView>
                {
                    this.state.coordinates.map(card => (
                        <Card 
                        key={card.name}
                        style={{marginBottom:10, width: 800}}
                        >

                            <Card.Title
                                title={card.name}
                                subtitle={'Recorded by ' + card.recordedBy + ' on ' + card.date + ' at ' + card.time}
                            />
                            <Card.Content>
                                <Paragraph>{card.text} </Paragraph>
                            </Card.Content>
                            <Card.Cover source={card.image} />
                            <Card.Actions>
                                <Button>Edit</Button>
                            </Card.Actions>
                        </Card>

                    ))
                }
            </ScrollView>
            </View>
        </View>


    );
};

export default Briefing;