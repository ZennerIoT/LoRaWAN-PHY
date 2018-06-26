# LoRaWAN-PHY
Copy of the LoRaWAN PHY spec in machine-readable form

This repository contains JSON files that are copies of the PHY definitions of the LoRaWAN spec.

## File structure

The files are structured like this:

`<version>/<region>/<definition>/<lang>.json`

and

`<version>/<region>/<definition>.json`, if it does not contain text that needs to be translated

where 

 * `version` is the version of the definition, i.e. `1.1`
 * `region` is the region ID of the definition
 * `definition` is a technical name of the definition
 * `lang` is an ISO 639-1 language code (every `text` field will be translated to that language)

there are additional files in the root directory:

 * `regions.json` contains a list of regions with their technical names along with humanized names. Since these names are not in a specific language, this file is not available in other languages

## Supported regions

 -[x] EU 863-870
 -[ ] US 902-928
 -[ ] China 779-787
 -[ ] EU 443
 -[ ] Australia 915-928
 -[ ] China 470-510
 -[ ] Asia 923
 -[ ] South Korea 920-923
 -[ ] India 865-867

## Supported Languages

 -[x] English
 -[x] German
 -[ ] *Your language here*