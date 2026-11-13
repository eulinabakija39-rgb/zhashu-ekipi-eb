// Registration Service bazë
class RegistrationService {
constructor() {
// Këtu mund të ruash të dhënat përkohësisht ose t'i lidhësh me modelin
this.registrations = [];
}

// Metoda për të regjistruar një përdorues në event
async registerUser(data) {
this.registrations.push(data);
return { success: true, message: 'Regjistrimi u krye me sukses', data };
}

// Metoda për të marrë të gjitha regjistrimet
async getAllRegistrations() {
return this.registrations;
}
}

module.exports = new RegistrationService();
