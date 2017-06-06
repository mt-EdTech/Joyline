import { StyleSheet } from 'react-native'; 

export const BACKGROUND_COLOR = '#000000';
export const TEXT_COLOR = '#202020'; 
export const HEADER_TEXT_COLOR = '#ffffff';
export const MUTED_COLOR = '#8e8786'; 
export const LINK_COLOR = '#48e9d9';

export const APP_STYLES = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#000000',
    marginTop: 0,
    paddingTop: 20,
    marginBottom: 0,
    marginHorizontal: 0,
    paddingHorizontal: 0,
  },
});

export const TEXT_STYLES = StyleSheet.create({
  standardtext: { 
    color: TEXT_COLOR, 
    fontFamily: 'Arial',
  },
});

export const IMAGE_STYLES = StyleSheet.create({
  backgroundimage: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    resizeMode: 'stretch',
  },
  imageGrid: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  imageGridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
});



