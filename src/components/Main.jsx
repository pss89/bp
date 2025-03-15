import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faCoffee, faCheckCircle);

export default function Main() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full text-center">
        <FontAwesomeIcon icon="coffee" />
        <FontAwesomeIcon icon="check-circle" style={{ color: 'green' }} />
        <h1>Main</h1>
      </div>
    </div>
  )
}