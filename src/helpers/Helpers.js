import { Platform } from 'react-native';

const OS = Platform.OS === 'ios' ? 'ios' : 'md';

export {OS};