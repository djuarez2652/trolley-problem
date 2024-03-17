'use client'

import { useState } from 'react';
import Image from 'next/image';
import { db } from './firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import BasicPie from "@/app/BasicPie";


function Question ( props ) {

	const headerSize = props.headerSize;
	const [isDisabled, setIsDisabled ] = useState( false );
	const [ clicked, setClicked ] = useState( -1 );
	const [ choice0Data, setChoice0Data ] = useState( 0 );
	const [ choice1Data, setChoice1Data ] = useState( 0 );
	const [ show, setShow ] = useState( false );

	async function handleClick ( e, number ) {
		props[`handleChoice${number}`]()
		setClicked( number );
		setIsDisabled( true );

		const docRef = doc( db, "results", `${props.number}` );
		const docSnap = await getDoc( docRef );

		const prevChoice0 = number == 0 ? docSnap.data().choice0 + 1 : docSnap.data().choice0
		const prevChoice1 = number == 1 ? docSnap.data().choice1 + 1 : docSnap.data().choice1
		setChoice0Data( prevChoice0 );
		setChoice1Data( prevChoice1 );

		setShow( true );

		await updateDoc( docRef, {
			"choice0": prevChoice0,
			"choice1": prevChoice1
		} );


	}

	return (
		<div style={{paddingTop: `${headerSize + 5}px`}} className={'w-screen h-screen grid grid-cols-2 grid-rows-1 justify-center gap-4 pl-20 pr-20 '}>
			<div className={'grid grid-rows-2 justify-center'}>
				<div className={'self-center text-3xl items-center text-center'}>
					{ props.questionLabel }
				</div>
				<div className={'flex flex-col items-center justify-evenly gap-5 mb-40'}>
					<button
						style={{backgroundColor: clicked == 0 ? 'rgb(203 213 225)' : 'rgb(226,232,240)', borderColor: clicked == 0 ? '#274156' : '#5a7489', borderWidth: '5px', borderStyle: 'solid' }}
						className={'shadow-xl p-10 text-xl'}
						onClick={ ( e ) => handleClick( e, 0 ) }
						disabled={ isDisabled } >
						{ props.choice0Label }
					</button>
					<button
						style={{backgroundColor: clicked == 1 ? 'rgb(203 213 225)' : 'rgb(226,232,240)', borderColor: clicked == 1 ? '#C03221' : '#f36554', borderWidth: '5px', borderStyle: 'solid' }}
						className={'shadow-xl p-10 text-xl'}
						onClick={ ( e ) => handleClick( e, 1 ) }
						disabled={ isDisabled } >
						{ props.choice1Label }
					</button>
				</div>
			</div>
			<div className={'grid grid-rows-2 items-center justify-center gap-10'}>
				<Image
					style={{justifySelf: 'center', alignSelf: 'end'}}
					src={ `${props.imgSrc}` }
					width={ 200 }
					height={ 200 }
					alt={ `${props.alt}` }
				/>
				{ show ?
					<BasicPie choice0={ choice0Data } choice1={ choice1Data } choice0Label={ props.choice0Label } choice1Label={ props.choice1Label } /> :
					<></>
				}
			</div>
		</div>
	);

}

export default Question;