import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    homeHeadingView: {
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingHorizontal: 10,
        marginVertical: 15
    },
    selectBoxView: {
        borderWidth: 0.5,
        borderColor: "#000",
        marginHorizontal: 5
    },
    headingTextView: {
        flexDirection: "row",
        marginHorizontal: 5,
    },
    headingTextStyle: {
        fontSize: 20,
        color: "#16264c",
        fontWeight: "normal"
    },
    headingText2Style: {
        fontSize: 20,
        color: "#16264c",
        fontWeight: "bold"
    },
    boxFirstRowView: {
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 0.5,
        borderBottomColor: "#000"
    },
    rowRightView: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: 150
    },
    boxLeftView: {
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    boxLeftTextStyle: {
        fontSize: 18,
        color: "#16264c",
        marginLeft: 8
    },
    boxRightTextStyle: {
        fontSize: 18,
        color: "#909197"
    },
    boxLeftText3Style: {
        fontSize: 18,
        color: "#16264c",
        marginLeft: 16
    }
});
export default styles;
