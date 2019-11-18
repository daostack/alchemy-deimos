/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

import {
  Colors,
} from "react-native/Libraries/NewAppScreen";

import {Node} from "react";
import {Text, StyleSheet, ImageBackground} from "react-native";
import React from "react";

const Header = (): Node => (
  <ImageBackground
    accessibilityRole={"image"}
    source={require("./alchemy-logo-white.svg")}
    style={styles.background}
    imageStyle={styles.logo}>
    <Text style={styles.text}>Alchemy Deimos</Text>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    paddingBottom: 10,
    paddingTop: 10,
    paddingHorizontal: 32,
  },
  logo: {
    opacity: 0.2,
    overflow: "visible",
    resizeMode: "cover",
    /*
     * These negative margins allow the image to be offset similarly across screen sizes and component sizes.
     *
     * The source logo.png image is 512x512px, so as such, these margins attempt to be relative to the
     * source image's size.
     */
    marginLeft: -128,
    marginBottom: -192,
  },
  text: {
    fontSize: 40,
    fontWeight: "600",
    fontFamily: "monospace",
    textAlign: "center",
    color: Colors.black,
  },
});

export default Header;
