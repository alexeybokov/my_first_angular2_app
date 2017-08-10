import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
    moduleId: module.id,
    selector: 'proposal-list',
    templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
    proposalOne: Proposal = new Proposal(15, 'Abc Company', 'http://' +
      'portfolio.alexeybokov.com', 'Ruby on Rails', 150, 120, 15, '' +
      'alexeybokov18@gmail.com')
    proposalTwo: Proposal = new Proposal(85, 'Sfd Company', 'http://' +
      'portfolio.alexeybokov.com', 'Ruby on Rails', 150, 120, 15, '' +
      'alexeybokov18@gmail.com')
    proposalThree: Proposal = new Proposal(200, 'Ldfg Company', 'http://' +
      'portfolio.alexeybokov.com', 'Ruby on Rails', 150, 120, 15, '' +
      'alexeybokov18@gmail.com')

    proposals: Proposal[] = [
      this.proposalOne,
      this.proposalTwo,
      this.proposalThree
    ]
}
