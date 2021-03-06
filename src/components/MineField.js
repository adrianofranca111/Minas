import React from 'react'
import { SafeAreaView, View, StyleSheet } from 'react-native'
import Field from './Field'

export default props => {
    const rows = props.board.map((row, r) => {
        const columns = row.map((field, c) => {
            return <Field {...field} key={c} />
        })
        return <SafeAreaView key={r}  style={{flexDirection: 'row'}}>{columns}</SafeAreaView>
    })
    return <SafeAreaView style={styles.container}>{rows}</SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE'
    }
})