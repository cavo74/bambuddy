// Loose translate signature: accepts i18next's t and the page-local TFunction.
type Translate = (key: string, options?: Record<string, unknown>) => string;

// Built-in maintenance types are stored in the database under their English
// names (backend/app/api/routes/maintenance.py), so the UI translates them by
// name. Types without a translation key, and custom types, show as stored.
const BUILT_IN_TYPE_KEYS: Record<string, string> = {
  'Lubricate Carbon Rods': 'lubricateCarbonRods',
  'Lubricate Linear Rails': 'lubricateRails',
  'Clean Nozzle/Hotend': 'cleanNozzle',
  'Check Belt Tension': 'checkBelts',
  'Clean Build Plate': 'cleanBuildPlate',
  'Check Extruder Gears': 'checkExtruder',
  'Check Cooling Fans': 'checkCooling',
  'General Inspection': 'generalInspection',
  'Clean Carbon Rods': 'cleanCarbonRods',
  'Lubricate Steel Rods': 'lubricateSteelRods',
  'Clean Steel Rods': 'cleanSteelRods',
  'Clean Linear Rails': 'cleanLinearRails',
  'Check PTFE Tube': 'checkPtfeTube',
  'Replace HEPA Filter': 'replaceHepaFilter',
  'Replace Carbon Filter': 'replaceCarbonFilter',
  'Lubricate Left Nozzle Rail': 'lubricateLeftNozzleRail',
};

/** A maintenance type's name in the reader's language. */
export function maintenanceTypeName(t: Translate, name: string | null | undefined): string {
  if (!name) return '';
  const key = BUILT_IN_TYPE_KEYS[name];
  return key ? t(`maintenance.types.${key}`, { defaultValue: name }) : name;
}
