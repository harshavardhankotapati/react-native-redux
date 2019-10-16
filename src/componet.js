import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert , ScrollView} from 'react-native';
import { connect } from 'react-redux'
import { setTodo, setList, setDelete, setEdit, setUpdate } from './actions'
class Todo extends Component {
    press = (val) => {
        if (val === "" || val === null) {
            Alert.alert(
                "enter somthing"
            )
        } else {
            this.props.list(val)
        }
    }
    onDelete = (val, index) => {
        this.props.delete(index)
    }

    onEdit = (v, k) => {
        this.props.edit(v, k)
    }
    onUpdate = () => {
        this.props.update(this.props.text, this.props.id)
    }
    render() {
        const display = this.props.listItems && this.props.listItems.map((v, k) => {
            return (
                <View style={{ height: 60, width: "90%", backgroundColor: "#b4e9f0", margin: 10, elevation: 4, justifyContent: "space-between", flexDirection: "row" }} key={k}>
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: 'center', }}>
                        <Text style={{ color: "black", margin: 10 }}>{k + 1}</Text>
                        <Text style={{ color: "black", margin: 10 }}>{v}</Text>

                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: 'center', }}>
                        <TouchableOpacity style={{ height: 40, backgroundColor: "red", width: 50, margin: 10, justifyContent: "center", alignItems: 'center', }}
                            onPress={() => { this.onDelete(v, k) }}>
                            <Text style={{ color: "white" }}>delete</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: 40, backgroundColor: "green", width: 50, margin: 10, justifyContent: "center", alignItems: 'center', }}
                            onPress={() => { this.onEdit(v, k) }}>
                            <Text style={{ color: "white" }}>edit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )


        })
        return (
            <View style={{  backgroundColor: '#F5FCFF',}}>
                <View style={{ flexDirection: "row" }}>
                    <TextInput style={{ height: 40, width: 280, color: "black", backgroundColor: "#b4ddf0", margin: 10 }}
                        value={this.props.text}
                        placeholder={"type hear"}
                        onChangeText={(text) => { this.props.inputText(text) }}
                    />
                    <TouchableOpacity style={this.props.isUpdate ?{ height: 40,backgroundColor: "green", width: 50, margin: 10, justifyContent: "center", alignItems: 'center', }:{ height: 40,backgroundColor: "blue", width: 50, margin: 10, justifyContent: "center", alignItems: 'center', }}
                        onPress={() => this.props.isUpdate ? this.onUpdate() : this.press(this.props.text)}>
                        {this.props.isUpdate ? <Text style={{ color: "white" }}>update </Text> : <Text style={{ color: "white" }}>send</Text>}
                    </TouchableOpacity>
                </View>
                < ScrollView>
                {this.props.listItems.length ? display:
                <View style={{flex:1,justifyContent: "center", alignItems: 'center'}}>
                <Text style={{alignself:"center",color:"red",fontSize:18,margin:10}}>no data hear</Text>
                </View> }
                </ ScrollView>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    text: state.text,
    listItems: state.list,
    isUpdate: state.isUpdate,
    id: state.id
})

const mapDispacthToProps = dispatch => ({
    inputText: (value) => dispatch(setTodo(value)),
    list: (val) => dispatch(setList(val)),
    delete: (val) => dispatch(setDelete(val)),
    edit: (val, s) => dispatch(setEdit(val, s)),
    update: (val, s) => dispatch(setUpdate(val, s))
})

export default connect(mapStateToProps, mapDispacthToProps)(Todo)