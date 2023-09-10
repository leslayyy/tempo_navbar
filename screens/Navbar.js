import { View, Text } from 'react-native'
import React from 'react'
import COLORS from '../constants/colors'
const Navbar = () => {
  return (
    <View>
      <Text style={{
                        top: 135,
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginVertical: 12,
                        color: COLORS.black
                    }}>Home Page ni Lesley</Text>
    </View>
  )
}

export default Navbar