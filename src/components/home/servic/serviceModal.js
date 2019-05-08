import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import fireManager from "../../../firebase/firemanager";
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions/actions";
import firebase from "firebase";

class ServiceModal extends React.Component {
  state = {
    title: this.props.service ? this.props.service.title : "null",
    content: this.props.service ? this.props.service.content : "null",
    id: this.props.service ? this.props.service.id : null,
    image: "",
    url: this.props.service ? this.props.service.url : null
  };

  handleTitle = e => {
    this.setState({ title: e.target.value });
    console.log(new Date().valueOf() + this.state.image.name);
  };

  handleContent = e => {
    this.setState({ content: e.target.value });
  };

  handleImage = e => {
    this.setState({ image: e.target.files[0] });
  };

  setImage = () => {
    const { image } = this.state;
    const name = new Date().valueOf() + image.name;
    const oldUrl = this.state.url;
    if (image) {
      const uploadTask = firebase
        .storage()
        .ref(`images/${name}`)
        .put(image);

      uploadTask.on(
        "state_changed",
        snapshot => {
          // progrss function ....
          // const progress = Math.round(
          //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          // );
          // this.setState({ progress });
        },
        error => {
          // error function ....
          alert(`SOMETHING WENT WRONG  ${error}`);
          console.log(error);
        },
        () => {
          // complete function ....
          firebase
            .storage()
            .ref("images")
            .child(name)
            .getDownloadURL()
            .then(url => {
              this.setState({ url });

              //////////////////////////////
              const newService = {
                title: this.state.title,
                content: this.state.content,
                id: this.state.id,
                url: url,
                imgName: name
              };

              fireManager
                .editServices(newService)
                .then(() => {
                  this.props.editService(newService);
                })
                .catch(() => {
                  alert("TRY AGAIN PLEASE");
                });
              //////////////////////////////
              firebase
                .storage()
                .refFromURL(oldUrl)
                .delete()
                .then(() => {
                  alert("asd");
                })
                .catch(err => {
                  console.log(err);
                });
            });
        }
      );
    } else {
    }
  };

  updateService = () => {
    const newService = {
      title: this.state.title,
      content: this.state.content,
      id: this.state.id,
      url: this.state.url
    };

    fireManager
      .editServices(newService)
      .then(() => {
        this.props.editService(newService);
      })
      .catch(() => {
        alert("TRY AGAIN PLEASE");
      });
  };

  render() {
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.props.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogContent>
            <TextField
              onChange={this.handleTitle}
              id="standard-bare"
              value={this.state.title}
              margin="normal"
            />

            <TextField
              onChange={this.handleContent}
              id="outlined-helperText"
              value={this.state.content}
              margin="normal"
              variant="outlined"
              multiline={true}
              rows="7"
              style={{ width: "500px" }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={this.updateService} color="primary">
              Edit
            </Button>
          </DialogActions>

          <div>
            <label htmlFor="file">Upload image</label>

            <input
              type="file"
              name="file"
              id="file"
              accept="image/x-png,image/gif,image/jpeg"
              onChange={this.handleImage}
            />
            <button onClick={this.setImage}>ok</button>
            {/* <p className="clip">{pathImage}</p> */}
          </div>
        </Dialog>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editService: data => dispatch(actionCreators.editService(data))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ServiceModal);
