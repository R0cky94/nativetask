import React, {Component} from 'react';
import {View, Text, TouchableOpacity, ToastAndroid} from 'react-native';
import Header from "../common/header";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './HomeStyle';
import {plusIcon} from '../common/icons'
import {minusIcon} from '../common/icons';
import {commonColor} from '../common/icons';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            room: 1,
            adults: 0,
            children: 0,
            roomPlusButton: false,
            roomMinusButton: false,
            adultMinusButton: false,
            adultPlusButton: false,
            childMinusButton: false,
            childPlusButton: false,
            totalPersons: 0,
        }
    }

    async onAddRooms() {
        if (this.state.room === 5) {
            await this.setState({roomPlusButton: true})
        } else {
            await this.setState({
                room: this.state.room + 1, roomMinusButton: false
            })
        }
    };

    async onReduceRooms() {
        if (this.state.room === 1) {
            await this.setState({roomMinusButton: true})
        } else {
            await this.setState({
                room: this.state.room - 1, roomPlusButton: false
            })
        }
    };

    async onAddAdults() {
        await this.setState({
            adults: this.state.adults + 1, adultMinusButton: false,
            totalPersons: this.state.totalPersons + 1,
        });
        await this.setState({room: Math.trunc((this.state.totalPersons - 1) / 4) + 1})
    };

    async onDecreaseAdults() {
        if (this.state.adults === 0) {
            this.setState({adultMinusButton: true})
        } else {
            await this.setState({
                adults: this.state.adults - 1,
                totalPersons: this.state.totalPersons - 1,
            });
            await this.setState({room: Math.trunc((this.state.totalPersons - 1) / 4) + 1})
        }

    };

    async onDecreaseChildren() {
        if (this.state.children === 0) {
            this.setState({childMinusButton: true})
        } else {
            await this.setState({
                children: this.state.children - 1,
                totalPersons: this.state.totalPersons - 1,
            });
            await this.setState({room: Math.trunc((this.state.totalPersons - 1) / 4) + 1})
        }
    };

    async onAddChildren() {
        if (this.state.adults > 0) {
            await this.setState({
                children: this.state.children + 1, childMinusButton: false,
                totalPersons: this.state.totalPersons + 1,
            });
            await this.setState({room: Math.trunc((this.state.totalPersons - 1) / 4) + 1})
        } else if (this.state.adults === 0) {
            return ToastAndroid.show('Minimum one adult required ', ToastAndroid.SHORT);
        }
    };

    render() {
        return (
            <View>
                <Header title={"Task"}/>
                <View style={styles.homeHeadingView}>
                    <Icon name={"users"} size={24} color={commonColor}/>
                    <View style={styles.headingTextView}>
                        <Text style={styles.headingTextStyle}>Choose number of </Text>
                        <Text style={styles.headingText2Style}>People</Text>
                    </View>
                </View>
                <View style={styles.selectBoxView}>
                    <View style={styles.boxFirstRowView}>
                        <View style={styles.boxLeftView}>
                            <Icon name={"bed"} size={24} color={commonColor}/>
                            <Text style={styles.boxLeftTextStyle}>Rooms</Text>
                        </View>
                        <View style={styles.rowRightView}>
                            <TouchableOpacity
                                disabled={this.state.roomMinusButton}
                                onPress={() => this.onReduceRooms()}>
                                {minusIcon}
                            </TouchableOpacity>
                            <Text style={styles.boxRightTextStyle}>{this.state.room}</Text>
                            <TouchableOpacity
                                disabled={this.state.roomPlusButton}
                                onPress={() => this.onAddRooms()}>
                                {plusIcon}
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.boxFirstRowView}>
                        <View style={styles.boxLeftView}>
                            <Icon name={"user"} size={24} color={commonColor}/>
                            <Text style={styles.boxLeftText3Style}>Adults</Text>
                        </View>
                        <View>
                            <View style={styles.rowRightView}>
                                <TouchableOpacity
                                    disabled={this.state.adultMinusButton}
                                    onPress={() => this.onDecreaseAdults()}>
                                    {minusIcon}
                                </TouchableOpacity>
                                <Text style={styles.boxRightTextStyle}>{this.state.adults}</Text>
                                <TouchableOpacity
                                    onPress={() => this.onAddAdults()}>
                                    {plusIcon}
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.boxFirstRowView}>
                        <View style={styles.boxLeftView}>
                            <Icon name={"child"} size={24} color={commonColor}/>
                            <Text style={styles.boxLeftText3Style}>Children</Text>
                        </View>
                        <View>
                            <View style={styles.rowRightView}>
                                <TouchableOpacity
                                    disabled={this.state.childMinusButton}
                                    onPress={() => this.onDecreaseChildren()}>
                                    {minusIcon}
                                </TouchableOpacity>
                                <Text style={styles.boxRightTextStyle}>{this.state.children}</Text>
                                <TouchableOpacity
                                    onPress={() => this.onAddChildren()}>
                                    {plusIcon}
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

export default Home;