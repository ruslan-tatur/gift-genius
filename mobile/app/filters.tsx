import { View, StyleSheet, ViewStyle, TextInput, TouchableOpacity } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { Slider } from '@miblanchard/react-native-slider';
import StyledText from '@/components/styled-text';
import { useAppStyles } from '@/hooks/useAppStyles';
import { useState } from 'react';
import { router } from 'expo-router';

export default function Filters() {
  const appStyles = useAppStyles();
  const [occasion, setOccasion] = useState('');
  const [age, setAge] = useState([35]);
  const [personality, setPersonality] = useState('');
  const [budget, setBudget] = useState([250]);

  const occasions = [
    { key: '1', value: 'Birthday' },
    { key: '2', value: 'Anniversary' },
    { key: '3', value: 'Wedding' },
    { key: '4', value: 'Christmas' },
  ];

  const personalities = [
    { key: '1', value: 'Adventurous' },
    { key: '2', value: 'Creative' },
    { key: '3', value: 'Practical' },
    { key: '4', value: 'Sophisticated' },
  ];

  const handleNavigation = () => {
    router.push('/product-list');
  };

  return (
    <View style={[{ backgroundColor: appStyles.backgroundColor }, styles.container]}>
      <StyledText style={[{ color: appStyles.textColor }, styles.title]}>Gift Guru</StyledText>
      
      <View style={styles.filterSection}>
        <StyledText style={[{ color: appStyles.textColor }, styles.label]}>Gift Occasion:</StyledText>
        <SelectList
          setSelected={setOccasion}
          data={occasions}
        //   boxStyles={[appStyles.input as TextStyle, styles.dropdown]}
          boxStyles={appStyles.input as ViewStyle}
          inputStyles={{ color: appStyles.textColor }}
        //   dropdownStyles={[appStyles.input as TextStyle, styles.dropdownList]}
          dropdownStyles={appStyles.input as ViewStyle}
          dropdownTextStyles={{ color: appStyles.textColor }}
          searchPlaceholder="Search"
        />
      </View>

      <View style={styles.filterSection}>
        <StyledText style={[{ color: appStyles.textColor }, styles.label]}>Recipient's Age:</StyledText>
        <Slider
          value={age}
          onValueChange={value => setAge(value)}
          minimumValue={0}
          maximumValue={100}
          step={5}
        //   thumbTintColor={appStyles.primaryColor}
        //   minimumTrackTintColor={appStyles.primaryColor}
        //   maximumTrackTintColor={appStyles.secondaryColor}
        />
        <View style={styles.budgetLabels}>
          <StyledText style={[{ color: appStyles.textColor }]}>{age[0]} years</StyledText>
        </View>
      </View>


      <View style={styles.filterSection}>
        <StyledText style={[{ color: appStyles.textColor }, styles.label]}>Recipient's Personality:</StyledText>
        <SelectList
          setSelected={setPersonality}
          data={personalities}
        //   boxStyles={[appStyles.input, styles.dropdown]}
          boxStyles={appStyles.input as ViewStyle}
          inputStyles={{ color: appStyles.textColor }}
        //   dropdownStyles={[appStyles.input, styles.dropdownList]}
          dropdownStyles={appStyles.input as ViewStyle}
          dropdownTextStyles={{ color: appStyles.textColor }}
          searchPlaceholder="Search"
        />
      </View>

      <View style={styles.filterSection}>
        <StyledText style={[{ color: appStyles.textColor }, styles.label]}>Budget Range:</StyledText>
        <Slider
          value={budget}
          onValueChange={value => setBudget(value)}
          minimumValue={10}
          maximumValue={500}
          step={10}
        //   thumbTintColor={appStyles.primaryColor}
        //   minimumTrackTintColor={appStyles.primaryColor}
        //   maximumTrackTintColor={appStyles.secondaryColor}
        />
        <View style={styles.budgetLabels}>
          <StyledText style={[{ color: appStyles.textColor }]}>${budget[0]}</StyledText>
          <StyledText style={[{ color: appStyles.textColor }]}>$500</StyledText>
        </View>
      </View>

      <TouchableOpacity style={[appStyles.darkButton, styles.searchButton]} onPress={handleNavigation}>
        <StyledText style={styles.buttonText}>Search</StyledText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  filterSection: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    marginBottom: 0,
  },
//   dropdown: {
//     marginBottom: 0,
//     borderWidth: 0,
//   },
//   dropdownList: {
//     borderWidth: 0,
//   },
  budgetLabels: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchButton: {
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
  },
}); 