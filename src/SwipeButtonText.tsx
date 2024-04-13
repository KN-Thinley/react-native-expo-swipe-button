import React, { FC } from 'react';
import {
  View,
  Text,
  TextProps,
  StyleProp,
  TextStyle,
  ViewProps,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import { DEFAULT_HEIGHT } from './constants';

export interface SwipeButtonTextProps {
  title: string | React.ReactNode;
  titleExtraTextProps?: TextProps;
  titleStyle?: StyleProp<TextStyle>;
  titleContainerExtraViewProps?: ViewProps;
  titleContainerStyle?: StyleProp<ViewStyle>;
  height?: number;
  titleElement?: JSX.Element;
}

const SwipeButtonText: FC<SwipeButtonTextProps> = ({
  title,
  titleStyle,
  titleContainerExtraViewProps,
  titleContainerStyle,
  titleExtraTextProps,
  titleElement,
  height = DEFAULT_HEIGHT,
}) => {
  return (
    titleElement || (
      <View
        testID="TitleContainer"
        style={[styles.titleContainer, { height: height }, titleContainerStyle]}
        {...titleContainerExtraViewProps}
      >
        {typeof title === 'string' ? (
          <Text
            numberOfLines={2}
            allowFontScaling={false}
            style={[styles.title, titleStyle]}
            testID="Title"
            {...titleExtraTextProps}
          >
            {title}
          </Text>
        ) : (
          title
        )}
      </View>
    )
  );
};

export default SwipeButtonText;

const styles = StyleSheet.create({
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 16,
    maxWidth: '50%',
    textAlign: 'center',
  },
});