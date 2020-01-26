import React, { Component } from 'react';
import { Text, SafeAreaView, TouchableOpacity, View, FlatList } from 'react-native';
import styles from '../Style';
import { SearchBar } from 'react-native-elements';


export default class UsersComponent extends Component {

    constructor(props) {

        super(props);
        this.state = {
            search: '',
            dataSource: [],
        }
    }

    async componentDidMount() {
        const dataList = await this.props.getList();
        await this.setState({ dataSource: dataList });
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

        const newData = this.props.user.filter(function (item) {

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




        return (


            <SafeAreaView style={styles.container}>
                <SearchBar

                    onChangeText={text => this.SearchFilterFunction(text)}
                    onClear={text => this.SearchFilterFunction('')}
                    autoCapitalize='none'
                    placeholder="Search for a user..."
                    value={this.state.search}
                    containerStyle={{

                        borderBottomColor: 'transparent',
                        borderTopColor: 'transparent',

                        marginBottom: 20,

                    }}
                />




                <FlatList
                    data={this.state.dataSource}
                    ItemSeparatorComponent={this.ListViewItemSeparator}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.row}>
                                <View style={styles.usernameview}>

                                    <Text style={styles.textInput2} >@{item.username}
                                    </Text>

                                </View>
                                <View style={styles.sportview}><Text style={styles.textinputsport}>{item.sport}</Text></View>

                                <View style={styles.endbutton2}>

                                    <TouchableOpacity onPress={() => this.props.onDetailsScreen(item)}><View style={styles.secondaryButton}>
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
