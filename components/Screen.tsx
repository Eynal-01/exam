import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const invitations = [
  {
    id: 1,
    teamName: 'ITAM - 1',
    members: 3,
    message: 'Hi, we need a designer, would you like to join our team?',
    tags: ['Design', 'UX/UI', 'Figma'],
  },
  {
    id: 2,
    teamName: 'ITAM - 2',
    members: 4,
    message:'Hi, we need designers to join our team!',
    tags: ['Photoshop', 'Illustrator', 'XD'],
  },
];

export default function Screen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>#notifications</Text>
      </View>
       <View style={styles.card}>
        <Text style={styles.title}>Invitations</Text>
        {invitations.map((invitation) => (
          <View key={invitation.id} style={styles.invitationCard}>
            <View style={styles.leftContainer}>
              <Image
                source={require("../assets/images/icon.png")} 
                style={styles.image}
              />
              <View style={styles.infoContainer}>
                <Text style={styles.teamName}>{invitation.teamName}</Text>
                <Text>{invitation.members} human</Text>
                <Text>{invitation.message}</Text>
                <View style={styles.tags}>
                  {invitation.tags.map((tag) => (
                    <TouchableOpacity key={tag} style={styles.tagButton}>
                      <Text style={styles.tagText}>{tag}</Text>
                    </TouchableOpacity>
                  ))}
          <TouchableOpacity style={styles.acceptButton}>
              <Text style={styles.acceptButtonText}>accept</Text>
            </TouchableOpacity>  
                </View>
              </View>
            </View>
          </View>
        ))}
      </View> 
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7EBFC',
  },
  header: {
    backgroundColor: '#0066CC',
    padding: 10,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
  },
  card: {
    margin: 10,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  invitationCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  leftContainer: {
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  infoContainer: {
    justifyContent: 'center',
  },
  teamName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tags: {
    flexDirection: 'row',
    marginTop: 5,
  },
  tagButton: {
    backgroundColor: '#E7EBFC',
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginRight: 5,
  },
  tagText: {
    color: '#0066CC',
  },
  acceptButton: {
    backgroundColor: '#0066CC',
    borderRadius: 20,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
    width:50,
    height:20
  },
  acceptButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});

