
import React,{useState} from 'react';
import { StyleSheet, View, Text, ImageBackground,ScrollView,TouchableOpacity } from 'react-native';


// Define the hobbies and their corresponding additional recommendations
const hobbies = {
  reading: [
    '- Read uplifting and motivational books.',
    '- Join a book club to discuss your favorite reads with others.',
    '- Explore different genres to find what resonates with you the most.',
    '- Read books that focus on personal development and self-improvement.',
    '- Join online reading communities or forums to discuss books and share recommendations with others.',
    '- Set reading goals to challenge yourself and track your progress.'
  ],
  cooking: [
    '- Try out new recipes to challenge yourself in the kitchen.',
    '- Cook a meal for someone you care about to share your love through food.',
    '- Attend cooking classes to improve your culinary skills.',
    '- Experiment with international cuisines and try preparing dishes from different cultures.',
    '- Organize a cooking-themed gathering or potluck with friends and family to exchange recipes.',
    '- Take part in a cooking competition or challenge to push your culinary skills to the next level.'
  ],
  writing: [
    '- Start a journal to express your thoughts and emotions through writing.',
    '- Write short stories or poems to unleash your creativity.',
    '- Consider starting a blog to share your experiences with others.',
    '- Participate in writing workshops or classes to enhance your writing abilities.',
    '- Start a gratitude journal to focus on positive aspects of life and foster a sense of appreciation.',
    '- Create short stories based on real-life experiences or intriguing observations from your surroundings.'
  ],
  singing: [
    '- Sing along to your favorite songs to lift your spirits.',
    '- Join a local choir or singing group to connect with others who share your passion.',
    '- Take vocal lessons to improve your singing skills.',
    '- Practice mindfulness exercises and meditation to improve breath control and vocal performance.',
    '- Collaborate with other musicians to create covers or original songs together.',
    '- Attend live music events and concerts to gain inspiration and learn from other performers.'
  ],
  coding: [
    '- Work on personal coding projects that excite you.',
    '- Contribute to open-source projects to collaborate with others in the coding community.',
    '- Attend coding workshops or hackathons to expand your knowledge.',
    '- Join online coding communities and contribute to open-source projects to expand your coding skills.',
    '- Solve coding challenges or participate in coding competitions to test your problem-solving abilities.',
    '- Start a coding blog to share your coding journey, projects, and knowledge with a wider audience.'
  ],
};

// Moderate Depression Recommendations Screen
export function ModerateDepressionRecommendations() {

  const [selectedHobby, setSelectedHobby] = useState(null);

  // Function to update the selected hobby
  const handleHobbySelection = (hobby) => {
    setSelectedHobby(hobby);
  };
  const handleCloseRecommendations = () => {
    setSelectedHobby(null);
  };

  
  return (
    <ImageBackground
      source={require('./imgj.jpg')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.container}>
    <View style={styles.contentContainer}>
     
      <Text style={styles.heading}>Moderate Depression Recommendations</Text>
      <Text style={styles.recommendation}>
        - Talk to a therapist or counselor about your feelings.
      </Text>
      <Text style={styles.recommendation}>
        - Consider joining a support group to connect with others who understand.
      </Text>
      <Text style={styles.recommendation}>
        - Establish a routine and set achievable goals for yourself.
      </Text>
      <Text style={styles.recommendation}>
        - Practice self-care activities that bring you joy.
      </Text>
      <Text style={styles.recommendation}>
  - Practice self-care regularly, including proper sleep, nutrition, and hygiene.
</Text>
<Text style={styles.recommendation}>
  - Engage in regular physical exercise.
</Text>
<Text style={styles.recommendation}>
  - Engage in activities you enjoy and that bring you a sense of accomplishment.
</Text>
<Text style={styles.recommendation}>
  - Practice relaxation techniques, such as deep breathing or meditation.
</Text>
<Text style={styles.recommendation}>
  - Practice gratitude by keeping a daily gratitude journal.
</Text>
<Text style={styles.recommendation}>
  - Spend time in nature or go for walks outside.
</Text>
<Text style={styles.recommendation}>
  - Use positive affirmations or mantras to boost self-esteem.
</Text>
<Text style={styles.recommendation}>
  - Practice mindfulness to stay present and reduce rumination.
</Text>
<Text style={styles.recommendation}>
  - Practice deep relaxation techniques, such as progressive muscle relaxation.
</Text>
<Text style={styles.recommendation}>
  - Set realistic expectations for yourself.
</Text>
<Text style={styles.recommendation}>
  - Challenge perfectionistic tendencies.
</Text>
<Text style={styles.recommendation}>
  - Practice deep breathing exercises during moments of stress or anxiety.
</Text>
<Text style={styles.recommendation}>
  - Incorporate relaxation techniques, such as progressive muscle relaxation or guided imagery.
</Text>
<Text style={styles.recommendation}>
  - Establish healthy sleep habits and maintain a consistent sleep schedule.
</Text>
<Text style={styles.recommendation}>
  - Engage in activities that promote a sense of purpose or meaning.
</Text>
<Text style={styles.clickInterestHeading}>Click your interest</Text>
            {/* Hobbies and their corresponding buttons */}
            {Object.keys(hobbies).map((hobby) => (
              <TouchableOpacity
                key={hobby}
                onPress={() => handleHobbySelection(hobby)}
                style={styles.hobbyButton}
              >
                <Text style={styles.hobbyButtonText}>{hobby}</Text>
              </TouchableOpacity>
            ))}

            {selectedHobby && (
              <View>
                <TouchableOpacity
                  onPress={handleCloseRecommendations}
                  style={styles.closeButton}
                >
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
                <Text style={styles.selectedHobby}>
                  You selected: {selectedHobby}
                </Text>
                {/* Additional Recommendations based on selected hobby */}
                {hobbies[selectedHobby].map((rec, index) => (
                  <Text key={index} style={styles.additionalRecommendation}>
                    {rec}
                  </Text>
                ))}
              </View>
            )}

    </View>
    </View>
    </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flexGrow: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff', // Set the text color for the heading
  },
  recommendation: {
    fontSize: 18,
    marginBottom: 10,
    color: '#ffffff', // Set the text color for the recommendations
  },
  contentContainer: {
    padding: 20,
    alignItems: 'flex-start', // Align items to the start of the container
    justifyContent: 'center',
  },
  selectedHobby: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  hobbyButton: {
    backgroundColor: '#3f51b5', // Customize the background color for the hobby buttons
    padding: 10,
    marginTop: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  hobbyButtonText: {
    color: '#ffffff',
    fontSize: 18,
  },
  additionalRecommendation: {
    fontSize: 18,
    marginBottom: 10,
    color: '#ffffff',
    marginLeft: 20, // Indent additional recommendations to differentiate them
  },
  clickInterestHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 10,
  },
  closeButton: {
    backgroundColor: '#f44336', // Customize the background color for the close button
    padding: 10,
    marginTop: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#ffffff',
    fontSize: 18,
  },
});
