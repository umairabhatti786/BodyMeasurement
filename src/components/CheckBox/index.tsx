import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import { images } from '../../assets/images';
import { icons } from '../../assets/icons';
import sizeHelper from '../../utils/Helpers';
import { theme } from '../../utils/Themes';

const CustomCheckbox = () => {
  const [checked, setChecked] = useState(true);

  return (
    <TouchableOpacity
      style={[styles.box, checked ? styles.checked : styles.unchecked]}
      onPress={() => setChecked(!checked)}
      activeOpacity={0.8}
    >
      {checked && (
        <Image
          source={icons.check}
          style={{
            width: sizeHelper.calWp(28),
            height: sizeHelper.calWp(28),
          }}
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomCheckbox;
const styles = StyleSheet.create({
  box: {
    width: sizeHelper.calWp(36),
    height: sizeHelper.calWp(36),
    borderRadius: sizeHelper.calWp(8),
    alignItems: 'center',
    justifyContent: 'center',
  },

  unchecked: {
    borderWidth: sizeHelper.calWp(2),
    borderColor: theme.colors.greyborder,
  },

  checked: {
    backgroundColor: theme.colors.primary,
  },
});
