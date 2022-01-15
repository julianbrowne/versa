import { ReactComponent as Github } from '../data/Github.svg'
import { ReactComponent as Close } from '../data/Close.svg'
import Modal from 'react-modal'

Modal.setAppElement('#root')

export const InfoModal = ({ isOpen, handleClose, darkMode, styles }) => (
  <Modal isOpen={isOpen} onRequestClose={handleClose} style={styles} contentLabel="Game Info Modal">
    <div className={`h-full ${darkMode ? 'dark' : ''}`}>
      <button
        className="absolute top-4 right-4 rounded-full nm-flat-background dark:nm-flat-background-dark text-primary dark:text-primary-dark p-1 w-6 h-6 sm:p-2 sm:h-8 sm:w-8 hover:nm-inset-background dark:hover:nm-inset-background-dark"
        onClick={handleClose}
      >
        <Close />
      </button>
      <div className="h-full flex flex-col items-center justify-center max-w-[390px] mx-auto pt-9 text-primary dark:text-primary-dark">
        <div className="flex-1 w-full sm:text-base text-sm">
          <h1 className="text-center sm:text-3xl text-2xl">How to play</h1>
          <ul className="list-disc pl-5 block sm:text-base text-sm">
            <li className="mt-6 mb-2">You have 6 guesses to guess the correct word.</li>
            <li className="mb-2">You can guess any valid word.</li>
            <li className="mb-2">
              After each guess, each letter will turn green, orange, or grey:
            </li>
          </ul>
          <div className="mb-3 mt-8 flex items-center">
            <span className="nm-inset-n-green text-gray-50 inline-flex items-center justify-center text-3x w-10 h-10">
              W
            </span>
            <span className="mx-2">=</span>
            <span>Correct letter, correct spot</span>
          </div>
          <div className="mb-3">
            <span className="nm-inset-yellow-500 text-gray-50 inline-flex items-center justify-center text-3x w-10 h-10">
              W
            </span>
            <span className="mx-2">=</span>
            <span>Correct letter, wrong spot</span>
          </div>
          <span className="nm-inset-n-gray text-gray-50 inline-flex items-center justify-center text-3x w-10 h-10">
            W
          </span>
          <span className="mx-2">=</span>
          <span>Wrong letter</span>
        </div>

        <h1 className="text-center sm:text-3xl text-2xl mb-4">About</h1>
        <span>
          In the beginning was the <a className="info-link" href="https://www.powerlanguage.co.uk/wordle/">Worldle</a> and the Worldle was good. But you could only play it once a day, so <a className="info-link" href="https://github.com/octokatherine">Katherine Peterson</a> said let there be <a className="info-link" href="https://octokatherine.github.io/word-master/">Word Master</a>, which you can play as much as you like.
        </span>
        <span>
          WordPastor is a clone of Word Master, which means 99% of the code comes from Word Master, and has (or plans to have) the following differences:
        </span>
        <ul className="list-disc pl-5 block sm:text-base text-sm">
          <li className="mt-2 mb-2">There shalt be no words with repeated letters</li>
          <li className="mt-2 mb-2">Some very minor design changes</li>
          <li className="mt-2 mb-2">All words shalt be from a british english dictionary</li>
        </ul>


      </div>
    </div>
  </Modal>
)
