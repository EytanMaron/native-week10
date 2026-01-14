import { Tabs } from 'expo-router';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../styles/tabs._layout.styles';

export default function TabsLayout() {
  return (
    <View style={styles.wrapper}>
      <SafeAreaView style={styles.headerContainer} edges={['top']}>
        <View style={styles.headerContent}>
          <Text style={styles.logoText}>fake news</Text>
        </View>
      </SafeAreaView>

      <Tabs screenOptions={{ headerShown: false, tabBarStyle: styles.tabBar, tabBarLabelStyle: styles.tabLabel, tabBarActiveTintColor: 'black' }}>
        <Tabs.Screen name="index" options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Image 
                source={require('../../assets/favicon.png')} 
                style={{ width: size, height: size, tintColor: color }} 
              />
            ),
          }} 
        />
        <Tabs.Screen name="create" options={{
            tabBarLabel: 'new change:)',
            tabBarIcon: ({ color, size }) => (
              <Image 
                source={require('../../assets/adaptive-icon.png')} 
                style={{ width: size, height: size, tintColor: color }} 
              />
            ),
          }} 
        />
        <Tabs.Screen 
          name="article/[id]" 
          options={{ href: null }} 
        />
      </Tabs>
    </View>
  );
}