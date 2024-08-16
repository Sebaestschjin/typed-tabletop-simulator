# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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