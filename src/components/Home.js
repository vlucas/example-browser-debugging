const MAGIC_NUMBER = 2;

function triggerError() {
  let foo = 'bar';

  throw new Error('This is an error that I just triggered! ' + foo);
}

function getMagicNumber() {
  try {
    return 2;
  }
  finally {
    return 3;
  }
}

function showMagicNumber() {
  $('.magic_number').text(getMagicNumber());
}

function render() {
  return `
    <div>
      <h2>Homepage</h2>
      <p><a class="button button-warn" onClick=${() => triggerError()}>Trigger Error</a></p>
      <p>&nbsp;</p>
      <p><a class="button" onClick="">Show Magic Number ({MAGIC_NUMBER})</a> ({this.state.MAGIC_NUMBER})</p>
      <p>&nbsp;</p>
      <p>Something here</p>
    </div>
  `;
}

export default { render };
