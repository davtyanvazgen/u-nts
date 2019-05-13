import { firestore } from "firebase";
import firebase from "firebase";

export default class fireManager {
  //GET SERVICES
  static getServices() {
    return firestore()
      .collection("services")
      .get()
      .then(function(querySnapshot) {
        return querySnapshot.docs.map(doc => doc.data());
      })
      .catch(function(error) {
        alert("Error: SOMENHING WENT WRONG", error);
      });
  }

  //EDIT SERVICE
  static editServices(service) {
    if (service.id) {
      return firestore()
        .collection("services")
        .doc(service.id)
        .update({ ...service })
        .then(() => {
          console.log("Successfully changed!");
        })
        .catch(error => {
          alert("Error writing document: SOMENHING WENT WRONG ", error);
        });
    } else {
      alert("Need to pass an object with existing id property");
    }
  }
}
