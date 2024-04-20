// React
import React from 'react';
import { Platform, SafeAreaView, StatusBar, TouchableOpacity, View } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Icon } from '@rneui/themed';

// Components
import { LoadingIndicator } from '../LoadingIndicator';

// Utils
import { className } from '../../global-styles';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Layout = ({
  children,
  onPress = () => '',
  translucent = true,
  StatusBarBg = 'transparent',
  showNavBar = true,
  showLoading = false,
  isSafeAreaView = false,
  containerStyle = {},
  barStyle = 'dark-content'
}) => {
  const Warp = isSafeAreaView ? SafeAreaView : View;

  return (
    <Warp style={[className('flex-1 bg-main'), { paddingTop: !isSafeAreaView && Platform.OS == 'android' ? 0 : getStatusBarHeight() + 20, }, containerStyle]}>
      <StatusBar translucent={translucent} backgroundColor={StatusBarBg} barStyle={barStyle} />

      {showNavBar && <View style={className('flex align-center justify-between mx-5 my-3')}>
        <TouchableOpacity style={{ width: 40, height: 40 }} onPress={() => onPress()}>
          <Icon
            name={'angle-left'}
            type='font-awesome'
            style={className('text-black text-xl')}
          />
        </TouchableOpacity>
      </View>}
      {showLoading && <LoadingIndicator />}

      {children}

    </Warp>
  );
};

export default Layout;
