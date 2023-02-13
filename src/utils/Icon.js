// Read all icons at the assets path.
const context = require.context('./../assets/icons', false, /\.svg$/);

// Helper that takes a context key a returns the icon name and its value.
function getIcon(key) {
  const iconName = key.substring(key.indexOf('/') + 1, key.lastIndexOf('.'));
  return [iconName, context(key)];
}

// Create dict that maps the icon name to the actual value.
// Can be used as `Icon.church`, `Icon.heart`, etc.
const icons = context.keys().map(getIcon);
export const Icon = Object.fromEntries(icons);
