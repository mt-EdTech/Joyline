import React from 'react';

import {
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  CameraRoll
} from 'react-native';

import Camera from 'react-native-camera';

export default class CaptureScreen extends React.Component {
  static navigationOptions = {
    title: 'Camera',
    headerStyle: {
            backgroundColor: 'green',
            height: 50,
    },
    headerTintColor: '#FFFFFF',
  };

  constructor(props) {
    super(props);

    this.camera = null;

    this.state = {
      camera: {
        aspect: Camera.constants.Aspect.fill,
        captureTarget: Camera.constants.CaptureTarget.cameraRoll,
        type: Camera.constants.Type.back,
        orientation: Camera.constants.Orientation.auto,
        flashMode: Camera.constants.FlashMode.auto,
      },
      isRecording: false,
      photos: [],
      selected: '',
      index: null
    };
  }  

  takePicture = () => {
  	debugger;
    if (this.camera) {
      this.camera.capture()
        .then((data) => console.log('Camera Capture:'+data))
        .catch(err => console.error('Camera Capture Error:'+err));
    }
  }

  startRecording = () => {
    if (this.camera) {
      this.camera.capture({mode: Camera.constants.CaptureMode.video})
          .then((data) => console.log(data))
          .catch(err => console.error(err));
      this.setState({
        isRecording: true
      });
    }
  }

  stopRecording = () => {
    if (this.camera) {
      this.camera.stopCapture();
      this.setState({
        isRecording: false
      });
    }
  }

  cameraRoll = () => {
    // const fetchParams = {
    //   first: 25,
    //   groupTypes: 'All',
    //   assetType: 'All',
    // };
    // CameraRoll.getPhotos(fetchParams, this.storeImages, this.logImageError);
    CameraRoll.getPhotos({first: 25, groupTypes: 'All', assetType: 'All',}).then(
      (data) =>{
        const assets = data.edges;
        const images = assets.map((asset) => asset.node.image);
        this.setState({
          images: images
        })
        console.log(images);
      },
      (error) => {
        console.warn(error);
      }
    );
  }

  switchType = () => {
    let newType;
    const { back, front } = Camera.constants.Type;

    if (this.state.camera.type === back) {
      newType = front;
    } else if (this.state.camera.type === front) {
      newType = back;
    }

    this.setState({
      camera: {
        ...this.state.camera,
        type: newType,
      },
    });
  }

  get typeIcon() {
    let icon;
    const { back, front } = Camera.constants.Type;

    //if (this.state.camera.type === back) {
    //  icon = require('../../assets/images/ic_camera_rear_white.png');
    //} else if (this.state.camera.type === front) {
    //  icon = require('../../assets/images/ic_camera_front_white.png');
    //}
    
    icon = require('../../assets/images/edio_camera_rotate.png');

    return icon;
  }

  switchFlash = () => {
    let newFlashMode;
    const { auto, on, off } = Camera.constants.FlashMode;

    if (this.state.camera.flashMode === auto) {
      newFlashMode = on;
    } else if (this.state.camera.flashMode === on) {
      newFlashMode = off;
    } else if (this.state.camera.flashMode === off) {
      newFlashMode = auto;
    }

    this.setState({
      camera: {
        ...this.state.camera,
        flashMode: newFlashMode,
      },
    });
  }

  get flashIcon() {
    let icon;
    const { auto, on, off } = Camera.constants.FlashMode;

    if (this.state.camera.flashMode === auto) {
      icon = require('../../assets/images/ic_flash_auto_white.png');
    } else if (this.state.camera.flashMode === on) {
      icon = require('../../assets/images/ic_flash_on_white.png');
    } else if (this.state.camera.flashMode === off) {
      icon = require('../../assets/images/ic_flash_off_white.png');
    }

    return icon;
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          animated
          hidden
        />
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={this.state.camera.aspect}
          captureTarget={this.state.camera.captureTarget}
          type={this.state.camera.type}
          flashMode={this.state.camera.flashMode}
          onFocusChanged={() => {}}
          onZoomChanged={() => {}}
          defaultTouchToFocus
          mirrorImage={false}
        />
        <View style={[styles.overlay, styles.topOverlay]}>
          <TouchableOpacity style={styles.cameraRoll}           
            onPress={this.cameraRoll}
          >
            <Image style={styles.cameraRollIcon}
              source={require('../../assets/images/icon-image-white.png')}
            />
          </TouchableOpacity>          
        </View>
        <View style={[styles.overlay, styles.bottomOverlay]}>
          <TouchableOpacity
            style={styles.typeButton}
            onPress={this.switchType}
          >
            <Image
              source={this.typeIcon}
            />
          </TouchableOpacity>          
          {
            !this.state.isRecording
            &&
            <TouchableOpacity
                style={styles.captureButton}
                onPress={this.takePicture}
            >
              <Image
                  source={require('../../assets/images/ic_photo_camera_36pt.png')}
              />
            </TouchableOpacity>
            ||
            null
          }
          <View style={styles.buttonsSpace} />
          {
              !this.state.isRecording
              &&
              <TouchableOpacity
                  style={styles.captureButton}
                  onPress={this.startRecording}
              >
                <Image
                    source={require('../../assets/images/ic_videocam_36pt.png')}
                />
              </TouchableOpacity>
              ||
              <TouchableOpacity
                  style={styles.captureButton}
                  onPress={this.stopRecording}
              >
                <Image
                    source={require('../../assets/images/ic_stop_36pt.png')}
                />
              </TouchableOpacity>
          }
          <TouchableOpacity
            style={styles.flashButton}
            onPress={this.switchFlash}
          >
            <Image
              source={this.flashIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    padding: 16,
    right: 0,
    left: 0,
    alignItems: 'center',
  },
  topOverlay: {
    top: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bottomOverlay: {
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButton: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 40,
  },
  typeButton: {
    padding: 5,
    paddingRight: 50,
  },
  flashButton: {
    padding: 5,
    paddingLeft: 50,
  },
  buttonsSpace: {
    width: 10,
  },
  cameraRoll: {
    padding: 5,
  },
  cameraRollIcon: {
    width: 25,
    height: 25,
  }
});
