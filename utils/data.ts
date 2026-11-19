export default {
    minimumLength: 1,
    maximumLength: 100,
    numbers: '1234567890',
    invalidCharacters: '!@#$%^&*(),<>?":{}|[];~`',
    basicEmailFormat: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Basic email format regex
    basicWebsiteFormat: /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/ // Basic website format regex
}