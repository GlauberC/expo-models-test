import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";

import * as SQLite from "expo-sqlite";

import InputLabel from "./components/InputLabel";
import Btn from "./components/Btn";

import {
  Container,
  Sep,
  User,
  NameUser,
  EmailUser,
  Title,
  DataUser,
  BtnDel,
  MiniSep
} from "./styles";

import { MaterialIcons } from "@expo/vector-icons";

export default function Sqlite() {
  const db = SQLite.openDatabase("db.db");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  // Create table USERS if it doesn't exist
  db.transaction(tx => {
    tx.executeSql(
      "create table if not exists users (id integer primary key not null, name text, email text);"
    );
  });

  function loadUsers() {
    db.transaction(tx => {
      tx.executeSql("select * from users", [], (_, { rows }) =>
        setUsers(rows._array)
      );
    });
  }

  useEffect(() => {
    loadUsers();
  }, []);

  function handleAdd() {
    db.transaction(tx => {
      tx.executeSql("insert into users (name, email) values (?, ?);", [
        name,
        email
      ]);
    });
    loadUsers();
    setEmail("");
    setName("");
  }

  function handleDelete(id) {
    db.transaction(tx => {
      tx.executeSql("delete from users where id = ?;", [id]);
    });
    loadUsers();
  }

  return (
    <Container>
      <InputLabel
        label='Nome Completo'
        value={name}
        onChange={setName}
        placeholder='Digite o seu nome completo'
      />
      <InputLabel
        label='Email'
        value={email}
        onChange={setEmail}
        placeholder='Digite o seu email'
      />
      <Btn onPress={handleAdd}>Cadastrar</Btn>
      {users.length > 0 && (
        <>
          <Sep />
          <Title>Lista de usuários</Title>
          <FlatList
            data={users}
            keyExtractor={user => String(user.id)}
            renderItem={({ item }) => (
              <User>
                <BtnDel onPress={() => handleDelete(item.id)}>
                  <MaterialIcons name='close' size={15} color='#fff' />
                </BtnDel>
                <DataUser>
                  <NameUser>{item.name}</NameUser>
                  <EmailUser>{item.email}</EmailUser>
                </DataUser>
              </User>
            )}
            ItemSeparatorComponent={() => <MiniSep />}
          />
        </>
      )}
    </Container>
  );
}
