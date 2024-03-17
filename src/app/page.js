'use client'

import Header from './Header'
import Question from "@/app/Question";
import {Animator, batch, ScrollContainer, ScrollPage, Fade, Sticky, FadeOut, FadeIn, Move} from "react-scroll-motion";
import {useEffect, useRef, useState} from "react";
import ReactLoading from 'react-loading';
import data from './questionData'
import question from "@/app/Question";

export default function Home () {

	const headerRef = useRef( );
	const [ headerSize, setHeaderSize ] = useState( 0 );
	const [ isLoading, setIsLoading ] = useState( true );
	const [ questions, setQuestions ] = useState( null );

	useEffect ( () =>  {

		const twoSeconds = setTimeout( () => {
			setIsLoading( false );
		}, 3000 )

		return () => clearTimeout( twoSeconds )
	}, [] )

	useEffect(() => {
		setHeaderSize( headerRef.current.clientHeight );
	}, [ headerRef ]);

	return (
		<>
			<ScrollContainer snap={'proximity'}>
				<ScrollPage>
					<Header/>
					<h1 ref={ headerRef } className={'w-screen p-2 font-medium text-4xl top-0 text-transparent'}>
						Trolley Dilemma Explorer
					</h1>

					{
						isLoading ?
						<div className={'w-screen h-screen flex flex-col gap-5 items-center justify-center'}>
							<ReactLoading type={'spinningBubbles'} color={'black'} />
							<p>Loading...</p>
						</div> :
							<Animator animation={batch(Fade(), Sticky(), Move(0, 50, 0, 0))}>
								<div className={'flex flex-col gap-10 items-center justify-center'}>
									<p className={'text-xl text-center mt-1'}>
										This website was made for Professor Derstine's Intro to Philosophy Class. You will
										be presented with different moral dilemma related to the well-known Trolley Problem.
									</p>
									<p className={'animate-bounce'}>Scroll Down to Begin</p>
								</div>
							</Animator>
					}

				</ScrollPage>
				{
					isLoading ? null :
						<ScrollPage>
							<Animator animation={Fade()}>
								<Question
									number={ data[ 0 ][ 'id' ] }
									headerSize={ headerSize }
									questionLabel={ data[ 0 ][ 'q' ] }
									choice0Label={ data[ 0 ][ 'choice0' ] }
									choice1Label={ data[ 0 ][ 'choice1' ] }
									imgSrc={ `/${ data[ 0 ][ 'fileName' ]}` }
									width={ 400 }
									height={ 400 }
									alt={ data[ 0 ][ 'fileName' ]}
								/>
							</Animator>
						</ScrollPage>
				}
				{
					isLoading ? null :
						<ScrollPage>
							<Animator animation={Fade()}>
								<Question
									number={ data[ 1 ][ 'id' ] }
									headerSize={ headerSize }
									questionLabel={ data[ 1 ][ 'q' ] }
									choice0Label={ data[ 1 ][ 'choice0' ] }
									choice1Label={ data[ 1 ][ 'choice1' ] }
									imgSrc={ `/${ data[ 1 ][ 'fileName' ]}` }
									width={ 400 }
									height={ 400 }
									alt={ data[ 1 ][ 'fileName' ]}
								/>
							</Animator>
						</ScrollPage>
				}
				{
					isLoading ? null :
						<ScrollPage>
							<Animator animation={Fade()}>
								<Question
									number={ data[ 2 ][ 'id' ] }
									headerSize={ headerSize }
									questionLabel={ data[ 2 ][ 'q' ] }
									choice0Label={ data[ 2 ][ 'choice0' ] }
									choice1Label={ data[ 2 ][ 'choice1' ] }
									imgSrc={ `/${ data[ 2 ][ 'fileName' ]}` }
									width={ 400 }
									height={ 400 }
									alt={ data[ 2 ][ 'fileName' ]}
								/>
							</Animator>
						</ScrollPage>
				}
				{
					isLoading ? null :
						<ScrollPage>
							<Animator animation={Fade()}>
								<Question
									number={ data[ 3 ][ 'id' ] }
									headerSize={ headerSize }
									questionLabel={ data[ 3 ][ 'q' ] }
									choice0Label={ data[ 3 ][ 'choice0' ] }
									choice1Label={ data[ 3 ][ 'choice1' ] }
									imgSrc={ `/${ data[ 3 ][ 'fileName' ]}` }
									width={ 400 }
									height={ 400 }
									alt={ data[ 3 ][ 'fileName' ]}
								/>
							</Animator>
						</ScrollPage>
				}
				{
					isLoading ? null :
						<ScrollPage>
							<Animator animation={Fade()}>
								<Question
									number={ data[ 4 ][ 'id' ] }
									headerSize={ headerSize }
									questionLabel={ data[ 4 ][ 'q' ] }
									choice0Label={ data[ 4 ][ 'choice0' ] }
									choice1Label={ data[ 4 ][ 'choice1' ] }
									imgSrc={ `/${ data[ 4 ][ 'fileName' ]}` }
									width={ 400 }
									height={ 400 }
									alt={ data[ 4 ][ 'fileName' ]}
								/>
							</Animator>
						</ScrollPage>
				}
				{
					isLoading ? null :
						<ScrollPage>
							<Animator animation={Fade()}>
								<div style={{paddingTop: `${headerSize + 5}px`}} className={'w-screen h-screen flex items-center justify-center pl-20 pr-20 '}>
									<p className={'text-xl'}>Thank you for participating! You have completed the survey.</p>
								</div>
							</Animator>
						</ScrollPage>
				}
			</ScrollContainer>
		</>
	)
}