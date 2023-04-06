import React, { useState } from "react";
import { View, Text, Modal, Pressable, StyleSheet } from "react-native";

interface ChargingStationProps {
  charger: any;
}

function ChargingStation({ charger }: ChargingStationProps) {
  const [modal, toggleModal] = useState(false);

  const chargeHandler = () => {
    fetch("https://example.ev.energy/chargingsession", {
      method: "POST",
      body: JSON.stringify({
        user: 1,
        car_id: 1,
        charger_id: charger.ID,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.charger}>
      <Pressable onPress={() => toggleModal(true)}>
        <Text>{charger.AddressInfo.Title}</Text>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          toggleModal(!modal);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>{charger.AddressInfo.Title}</Text>
            <Text style={styles.modalText}>
              Address: {charger.AddressInfo.AddressLine1}
            </Text>
            {charger.AddressInfo.ContactTelephone1 ? (
              <Text style={styles.modalText}>
                Phone: {charger.AddressInfo.ContactTelephone1}
              </Text>
            ) : (
              <Text>N/A</Text>
            )}
            {charger.AddressInfo.AccessComments ? (
              <Text style={styles.modalText}>
                Availability: {charger.AddressInfo.AccessComments}
              </Text>
            ) : (
              <Text>Check hours of operation</Text>
            )}

            <Pressable
              style={[styles.button, styles.chargeButton]}
              onPress={() => {
                chargeHandler();
                toggleModal(!modal);
              }}
            >
              <Text style={styles.textStyle}>Start Charging</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                toggleModal(false);
              }}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  charger: {
    borderWidth: 1,
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
    margin: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  chargeButton: {
    backgroundColor: "#2196F3",
  },
  buttonClose: {
    backgroundColor: "red",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
  },
});

export default ChargingStation;
