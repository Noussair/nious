import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { useTranslation } from 'react-i18next';

interface LanguageSwitcherProps {}

function classNames(...classes: (string | boolean)[]): string {
  return classes.filter(Boolean).join(' ');
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = () => {
  const { i18n } = useTranslation();

  const languageOptions = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Francais' },
    { code: 'de', label: 'Deutsch' } 
  ];

  const changeLanguage = (lang: string) => {
    console.log(lang);
    
    i18n.changeLanguage(lang);
  };

  return (
    <Menu as="div" style={{minWidth:'50px'}} className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full text-dark uppercase border-0 justify-center gap-x-1.5 bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm  ring-inset ring-gray-300 hover:text-light duration-300  hover:bg-gray-50">
          {i18n.language} {/* Assuming you have language names in your translations */}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute bg-light right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {languageOptions.map(({ code, label }) => (
              <Menu.Item key={code}>
                {({ active }) => (
                  <button
                    onClick={() => changeLanguage(code)}
                    className={classNames(
                      active ? 'bg-grey duration-300 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 w-full text-left text-sm'
                    )}
                  >
                    {label}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default LanguageSwitcher;
