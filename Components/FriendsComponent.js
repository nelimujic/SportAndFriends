import React, { Component } from 'react';
import { Text, SafeAreaView, TouchableOpacity, View, ActivityIndicator, FlatList } from 'react-native';
import styles from '../Style';
import { SearchBar } from 'react-native-elements';

export default class FriendsComponent extends Component {

    constructor(props) {

        super(props);
        this.state = {
            search: '',
            dataSource: [],
        }
    }

    async componentDidMount() {
        await this.props.getList();
        await this.setState({ dataSource: this.props.friend });
    };

    ListViewItemSeparator = () => {
        //Item sparator view
        return (
            <View
                style={{
                    height: 0.3,
                    width: '90%',
                    backgroundColor: 'white',
                    alignSelf: 'center',
                    marginTop: 5,
                }}
            />
        );
    };

    SearchFilterFunction(text) {

        const newData = this.props.friend.filter(function (item) {
            const itemData = item.username ? item.username : '';
            const textData = text;
            return itemData.indexOf(textData) > -1;
        });
        this.setState({
            dataSource: newData,
            search: text,
        });
    }



    render() {

        if (this.props.isLoading) {

            return (

                <View><ActivityIndicator></ActivityIndicator></View>
            )
        }


        return (

            <SafeAreaView style={styles.container}>
                <View>
                    <SearchBar
                        onChangeText={text => this.SearchFilterFunction(text)}
                        onClear={() => this.SearchFilterFunction('')}
                        placeholder="Search for a friend..."
                        autoCapitalize='none'
                        value={this.state.search}
                        containerStyle={{

                            borderBottomColor: 'transparent',
                            borderTopColor: 'transparent',

                            marginBottom: 20,

                        }}
                    />
                </View>

                <FlatList
                    data={this.state.search ? this.state.dataSource : this.props.friend}
                    ItemSeparatorComponent={this.ListViewItemSeparator}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.row}>
                                <View style={styles.sportview4}>
                                    <Text style={styles.textInput2} >@{item.username}
                                    </Text>

                                </View>
                                <View style={styles.placeview4}><Text style={styles.textinputsport}>{item.sport}</Text></View>
                                <View style={styles.endbutton2}>

                                    <TouchableOpacity onPress={() => this.props.onDetailsScreen(item)}>
                                        <View style={styles.secondaryButton}>
                                            <Text style={styles.textinputsport5}>See</Text>
                                        </View>
                                    </TouchableOpacity>

                                </View>

                            </View>
                        );

                    }
                    }
                    keyExtractor={(item, index) => index.toString()}
                >

                </FlatList>

            </SafeAreaView>
        );
    }
}

