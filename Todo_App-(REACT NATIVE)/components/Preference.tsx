import { View, Text, Switch } from 'react-native'
import React, { useState } from 'react'
import useTheme from '@/hooks/useTheme';
import { createSettingsStyles } from '@/assets/styles/settings.styles';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const Preference = () => {
    const [isAutoSync, setIsAutoSync] = useState(true);
    const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
    const { isDarkMode, toggleDarkMode, colors } = useTheme();

    const settingsStyles = createSettingsStyles(colors);

    return (
        <LinearGradient colors={colors.gradients.surface} style={settingsStyles.section}>
            <Text style={settingsStyles.sectionTitle}>Preferences</Text>

            {/* DARK MODE TOGGLER  */}
            <View style={settingsStyles.settingItem}>
                <View style={settingsStyles.settingLeft}>
                    <LinearGradient colors={colors.gradients.primary} style={settingsStyles.settingIcon}>
                        <Ionicons name="moon" size={18} color="#fff" />
                    </LinearGradient>

                    <Text style={settingsStyles.settingText}>Dark Mode</Text>

                </View>


                <Switch
                    value={isDarkMode}
                    onValueChange={toggleDarkMode}
                    trackColor={{ false: "#000", true: colors.primary }}
                    thumbColor={isDarkMode ? "#fff" : colors.border}
                    ios_backgroundColor={colors.border}
                />


            </View>

            {/* NOTIFICATION MODE  */}
            <View style={settingsStyles.settingItem}>
                <View style={settingsStyles.settingLeft}>
                    <LinearGradient colors={colors.gradients.warning} style={settingsStyles.settingIcon}>
                        <Ionicons name="notifications" size={18} color="#fff" />
                    </LinearGradient>

                    <Text style={settingsStyles.settingText}>Notifications</Text>

                </View>

                <Switch
                    value={isNotificationsEnabled}
                    onValueChange={()=>setIsNotificationsEnabled(!isNotificationsEnabled)}
                    trackColor={{ false: "#000", true: colors.warning}}
                    thumbColor={isDarkMode ? "#fff" : colors.border}
                    ios_backgroundColor={colors.border}
                />

            </View>


             {/* AUTO SYNC  */}
            <View style={settingsStyles.settingItem}>
                <View style={settingsStyles.settingLeft}>
                    <LinearGradient colors={colors.gradients.success} style={settingsStyles.settingIcon}>
                        <Ionicons name="notifications" size={18} color="#fff" />
                    </LinearGradient>

                    <Text style={settingsStyles.settingText}>Auto Sync</Text>

                </View>

                <Switch
                    value={isAutoSync}
                    onValueChange={()=>setIsAutoSync(!isAutoSync)}
                    trackColor={{ false: "#000", true: colors.success}}
                    thumbColor={isDarkMode ? "#fff" : colors.border}
                    ios_backgroundColor={colors.border}
                />

            </View>

        </LinearGradient>

    )
}

export default Preference