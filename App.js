

import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// --- SECURE CONFIGURATION (ADDRESS IS NOT EXPOSED IN UI RENDER) ---
// Your fresh Ethereum address is defined here on the JS/React level for logic, 
// but we will not render this variable directly in the visible text components.
const MY_REVENUE_ADDRESS = "0xB643e24d540D008EaC8Ec6E89C57a2Fd71D8515c";

// A helper function to create a masked version for UI (e.g., "0xB64...515c")
const maskAddress = (address) => {
  if (!address || address.length < 10) return '0xNexus...99AI';
  return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
};
// ----------------------------------------------------------------------

export default function App() {
  const [walletCreated, setWalletCreated] = useState(false);
  const [scanStatus, setScanStatus] = useState('Protected by AI Scam Shield');

  const createSmartWallet = () => {
    setWalletCreated(true);
    setScanStatus('MPC Node Security Active - Zero Seed Risk');
    // In a real app, this would trigger the MPC wallet generation flow
  };

  const initiatePlatformTransfer = () => {
    // Conceptual function: This would securely use the MY_REVENUE_ADDRESS for 
    // backend fee routing or transaction logic. The user does not see the address 
    // they are sending to, as this logic is handled by the platform smart contract/API.
    console.log("Initiating secure routing to platform address:", MY_REVENUE_ADDRESS);
    Alert.alert(
      "Secure Transfer", 
      "Platform fee routing initiated successfully. (Conceptual Test)",
      [{ text: "OK" }]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>NEXUS 🛡️</Text>
          <Text style={styles.tagline}>Next-Gen Web3 Super-App</Text>
        </View>

        {/* Security Banner */}
        <View style={styles.banner}>
          <Text style={styles.bannerText}>⚡ {scanStatus}</Text>
        </View>

        {/* Main Card / Dashboard */}
        {!walletCreated ? (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>No Seed Phrases Required</Text>
            <Text style={styles.cardDesc}>
              Experience state-grade MPC security that completely replaces MetaMask and Trust Wallet with absolute freedom.
            </Text>
            <TouchableOpacity style={styles.primaryButton} onPress={createSmartWallet}>
              <Text style={styles.buttonText}>Create Smart Wallet</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Wallet Connected</Text>
            <Text style={styles.balance}>$0.00 USD</Text>
            {/* WE ONLY SHOW A MASKED INDICATOR HERE, NOT THE FULL ADDRESS */}
            <Text style={styles.addressHint}>Secure ID: {maskAddress(MY_REVENUE_ADDRESS)}</Text>
            
            <View style={styles.actionRow}>
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionText}>Send</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionText}>Swap</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButton} onPress={initiatePlatformTransfer}>
                <Text style={styles.actionText}>Test Transfer</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Footer / Branding (Removed Debug Card) */}
         <View style={styles.footer}>
            <Text style={styles.footerText}>Built with freedom. Secured by AI.</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0b10',
  },
  scrollContent: {
    padding: 20,
    alignItems: 'center',
  },
  header: {
    marginTop: 40,
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#00ffcc',
    letterSpacing: 2,
  },
  tagline: {
    fontSize: 14,
    color: '#8b9bb4',
    marginTop: 5,
  },
  banner: {
    backgroundColor: '#161b22',
    borderWidth: 1,
    borderColor: '#00ffcc33',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 30,
  },
  bannerText: {
    color: '#00ffcc',
    fontSize: 12,
    fontWeight: '600',
  },
  card: {
    backgroundColor: '#121824',
    width: '100%',
    padding: 25,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#21262d',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
    textAlign: 'center',
  },
  cardDesc: {
    fontSize: 14,
    color: '#8b9bb4',
    textAlign: 'center',
    marginBottom: 25,
    lineHeight: 20,
  },
  primaryButton: {
    backgroundColor: '#00ffcc',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#0a0b10',
    fontSize: 16,
    fontWeight: 'bold',
  },
  balance: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
    marginVertical: 10,
  },
  addressHint: {
    fontSize: 10,
    color: '#576b8a', // Darker, subtle gray
    marginBottom: 25,
    fontFamily: 'monospace',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  actionButton: {
    backgroundColor: '#21262d',
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  actionText: {
    color: '#ffffff',
    fontWeight: '600',
  },
  footer: {
    marginTop: 60,
    marginBottom: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 10,
    color: '#3a4659',
  }
});

