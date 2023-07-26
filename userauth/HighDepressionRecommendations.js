
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
// High Depression Recommendations Screen
export function HighDepressionRecommendations() {
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
      <Text style={styles.heading}>High Depression Recommendations</Text>
      <Text style={styles.recommendation}>
        - Seek professional help from a therapist or counselor.
      </Text>
      <Text style={styles.recommendation}>
        - Consider medication under the guidance of a psychiatrist.
      </Text>
      <Text style={styles.recommendation}>
        - Engage in regular physical exercise to boost mood.
      </Text>
      <Text style={styles.recommendation}>
        - Practice mindfulness and relaxation techniques.
      </Text>
      <Text style={styles.recommendation}>
  - Seek professional help from a psychologist or therapist.
</Text>
<Text style={styles.recommendation}>
  - Set realistic goals and break them into smaller, achievable tasks.
</Text>
<Text style={styles.recommendation}>
  - Avoid excessive alcohol or drug use.
</Text>
<Text style={styles.recommendation}>
  - Challenge negative thoughts and replace them with positive or realistic ones.
</Text>
<Text style={styles.recommendation}>
  - Limit exposure to negative news or media.
</Text>
<Text style={styles.recommendation}>
  - Limit time spent on social media or comparison with others.
</Text>
<Text style={styles.recommendation}>
  - Establish a daily routine to provide structure and stability.
</Text>
<Text style={styles.recommendation}>
  - Identify and challenge self-critical or negative beliefs.
</Text>
<Text style={styles.recommendation}>
  - Seek out professional support groups or therapy sessions.
</Text>
<Text style={styles.recommendation}>
  - Engage in cognitive-behavioral therapy techniques.
</Text>
<Text style={styles.recommendation}>
  - Learn and implement stress-management techniques.
</Text>
<Text style={styles.recommendation}>
  - Take breaks and allow yourself time for rest.
</Text>
<Text style={styles.recommendation}>
  - Engage in regular sunlight exposure.
</Text>
<Text style={styles.recommendation}>
  - Use a planner or schedule to organize your day.
</Text>
<Text style={styles.recommendation}>
  - Identify and avoid triggers that worsen your mood.
</Text>
<Text style={styles.recommendation}>
  - Consider participating in talk therapy or counseling.
</Text>
<Text style={styles.recommendation}>
  - Engage in acts of self-love and self-compassion.
</Text>
<Text style={styles.recommendation}>
  - Remember to be patient with yourself as healing takes time.
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