class Spaceship {
  constructor(name, crewmembers, phasers, shields) {
    this.name = name
    if (crewmembers.length === 0) {
      this.docked = true
    } else {
      crewmembers.forEach( function (crewMember){
        crewMember.currentShip = this
      }, this)
      this.docked = false
    }
    this.phasers = phasers
    this.shields = shields
    this.phasersCharge = 'uncharged'
    this.warpDrive = 'disengaged'
    this.cloaked = false
  }
}

// joel = new CrewMember('Pilot')
// spacetron500 = new Spaceship('Spacetron-old model', [joel], 10, 100)
