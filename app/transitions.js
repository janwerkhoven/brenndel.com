export default function() {

  this.transition(
    this.use('rotateToRight'),
    this.reverse('rotateToLeft')
  );

  this.transition(
    this.toRoute('about'),
    this.fromRoute(['quality', 'tailored', 'crystal', 'contact']),
    this.use('rotateToLeft'),
    this.reverse('rotateToRight'),
  );

  this.transition(
    this.toRoute('quality'),
    this.fromRoute(['tailored', 'crystal', 'contact']),
    this.use('rotateToLeft'),
    this.reverse('rotateToRight'),
  );

  this.transition(
    this.toRoute('tailored'),
    this.fromRoute(['crystal', 'contact']),
    this.use('rotateToLeft'),
    this.reverse('rotateToRight'),
  );

  this.transition(
    this.toRoute('crystal'),
    this.fromRoute('contact'),
    this.use('rotateToLeft'),
    this.reverse('rotateToRight'),
  );

  // this.transition(
  //   this.toRoute('index'),
  //   this.fromRoute(['about', 'quality', 'tailored', 'crystal', 'contact']),
  //   this.use('collapseLogo'),
  //   this.reverse('expandLogo')
  // );

};