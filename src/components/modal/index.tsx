import React from 'react';
import { Dialog, Transition } from '@headlessui/react';

type TProps = {
	closeModal: React.Dispatch<React.SetStateAction<boolean>>;
	openModal: boolean;
	title: string;
	closeButtonText?: string;
	children: React.ReactNode;
  actionButtonText: string;
};

const Modal = ({
	closeModal,
	openModal,
	title,
	children,
	closeButtonText = 'Close',
  actionButtonText,
}: TProps) => {
	return (
		<Transition appear show={openModal} as={React.Fragment}>
			<Dialog as='div' className='relative z-10' onClose={closeModal}>
				<Transition.Child
					as={React.Fragment}
					enter='ease-out duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<div className='fixed inset-0 bg-black bg-opacity-25' />
				</Transition.Child>

				<div className='fixed inset-0 overflow-y-auto'>
					<div className='flex min-h-full items-center justify-center p-4 text-center'>
						<Transition.Child
							as={React.Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 scale-95'
							enterTo='opacity-100 scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 scale-100'
							leaveTo='opacity-0 scale-95'
						>
							<Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
								<Dialog.Title
									as='h3'
									className='text-lg font-medium leading-6 text-gray-900'
								>
									{title}
								</Dialog.Title>
								{children}
								<div className='mt-4 space-x-2'>
									<button
										type='button'
										className='inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-blue-900 hover:bg-slate-200 transition focus:outline-none'
										onClick={() => closeModal(false)}
									>
										{closeButtonText}
									</button>
									<button
										type='button'
										className='btn btn-primary'
										onClick={() => closeModal(false)}
									>
										{actionButtonText}
									</button>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
};

export default Modal;
