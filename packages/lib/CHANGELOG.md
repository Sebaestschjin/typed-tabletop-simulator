# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.5.0] - 2024-11-20

### Added

- `Forge` can create stated objects.

## [0.4.0] - 2024-09-25

### Added

- `Forge` can create asset bundles.

## [0.3.0] - 2024-08-21

### Added

- `Forge` can also create snap points for objects.
- Exports internal `math` module as `Math` for maths helper functions.

## [0.2.2] - 2024-08-20

### Fixed

- Sets Lua target to 5.2 which fixes some usage of the lua-lib, e.g. `Forge.combineDecks`.

## [0.2.1] - 2024-08-16

### Fixed

- RGB color conversion takes all 3 colors into account before converting.

## [0.2.0] - 2024-08-13

### Added

- Forge: Color property for objects can now be defined as a hex value as well.

## [0.1.0] - 2024-08-08

### Fixed

- Adds missing flag for locking objects.
- Adds missing flag to set a tile type.

### Added

- `Forge.combineDecks` can be used to combine multiple decks into one.
- `Forge.createDeck` re-uses deck ids for the same front URL.
- `Forge.setCurrentDeck` can set the starting deck id.
