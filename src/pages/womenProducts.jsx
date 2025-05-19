//
import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import ProductCarousel from '../components/Carousel' // make sure this path is correct
import {
  wShirt,
  wpants,
  dress,
  wWatches,
  wFragrances,
  wcare,
  wShoes,
  makeup2,
} from '../../assets'

const WomenProducts = () => {
  const [activeId, setActiveId] = useState('')
  const [result, setResult] = useState([])
  const [shirts, setShirts] = useState([])
  const [pantss, setPants] = useState([])
  const [selfcare, setSelfcare] = useState([])
  const [dresses, setDresses] = useState([])
  const [watchess, setWatches] = useState([])
  const [fragrancess, setfragrances] = useState([])
  const [shoess, setShoes] = useState([])
  const [makeups, setMakeups] = useState([])

  const sectionRefs = {
    shirts: useRef(null),
    pants: useRef(null),
    selfcare: useRef(null),
    Dresses: useRef(null),
    watches: useRef(null),
    fragrances: useRef(null),
    shoes: useRef(null),
    Makeups: useRef(null),
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          'http://localhost:3000/api/getProduct/women'
        )
        setResult(res.data)
        const shirts = res.data.filter((item) => item.subcategory === 'shirts')
        const pants = res.data.filter((item) => item.subcategory === 'pants')
        const selfcare = res.data.filter(
          (item) => item.subcategory === 'selfcare'
        )
        const dresses = res.data.filter(
          (item) => item.subcategory === 'Dresses'
        )
        const watches = res.data.filter(
          (item) => item.subcategory === 'watches'
        )
        const fragrances = res.data.filter(
          (item) => item.subcategory === 'fragrances'
        )
        const shoes = res.data.filter((item) => item.subcategory === 'shoes')
        const makeups = res.data.filter((item) => item.subcategory === 'makeup')

        setShirts(shirts)
        setPants(pants)
        setSelfcare(selfcare)
        setDresses(dresses)
        setWatches(watches)
        setfragrances(fragrances)
        setShoes(shoes)
        setMakeups(makeups)
      } catch (error) {
        console.error(error)
      }
    }
    fetchProducts()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0.3 }
    )

    Object.keys(sectionRefs).forEach((key) => {
      const element = sectionRefs[key].current
      if (element) observer.observe(element)
    })

    return () => {
      Object.keys(sectionRefs).forEach((key) => {
        const element = sectionRefs[key].current
        if (element) observer.unobserve(element)
      })
    }
  }, [])

  const scrollTo = (id) => {
    sectionRefs[id].current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="grid grid-cols-[1fr_4fr]  ">
      <div className="flex flex-col gap-4 p-4 pt-[100px] w-full  ">
        {Object.keys(sectionRefs).map((key, index) => (
          <div
            key={key}
            onClick={() => scrollTo(key)}
            style={{
              cursor: 'pointer',
              top: `${100 + index * 50}px`,
              fontWeight: activeId === key ? 'bold' : 'normal',
              color: activeId === key ? '#000' : '#555',
            }}
            className="fixed font-poppins-regular text-black "
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </div>
        ))}
      </div>

      <div
        style={{ flex: 1, padding: '1rem' }}
        className=" min-h-[100vh] w-full "
      >
        <div
          id="shirts"
          ref={sectionRefs.shirts}
          style={{ borderBottom: '1px solid #ccc' }}
        >
          <h2 className="font-poppins-semibold  text-xl mb-[10px] pt-[50px]">
            Shirts
          </h2>
          <div className="grid grid-cols-[3fr_1.3fr] gap-4">
            <ProductCarousel cards={shirts} />
            <img
              src={wShirt}
              alt="shirt"
              style={{ width: '100%' }}
              className="rounded-[15px] shadow-md"
            />
          </div>
        </div>
        {/* Repeat for other sections if needed */}
        <div
          id="pants"
          ref={sectionRefs.pants}
          style={{ borderBottom: '1px solid #ccc' }}
        >
          <h2 className="font-poppins-semibold  text-xl mb-[10px] pt-[50px]">
            Pants
          </h2>
          <div className="grid grid-cols-[1.3fr_3fr] gap-4">
            <img
              src={wpants}
              alt="pants"
              style={{ width: '100%' }}
              className="rounded-[15px] shadow-md"
            />

            <ProductCarousel cards={pantss} />
          </div>
        </div>

        <div
          id="selfCare"
          ref={sectionRefs.selfcare}
          style={{ borderBottom: '1px solid #ccc' }}
        >
          <h2 className="font-poppins-semibold  text-xl mb-[10px] pt-[50px]">
            SelfCare
          </h2>
          <div className="grid grid-cols-[3fr_1.3fr] gap-4">
            <ProductCarousel cards={selfcare} />
            <img
              src={wcare}
              alt="SelfCare"
              style={{ width: '100%' }}
              className="rounded-[15px] shadow-md"
            />
          </div>
        </div>

        <div
          id="Dresses"
          ref={sectionRefs.Dresses}
          style={{ borderBottom: '1px solid #ccc' }}
        >
          <h2 className="font-poppins-semibold  text-xl mb-[10px] pt-[50px]">
            Dresses
          </h2>
          <div className="grid grid-cols-[1.3fr_3fr] gap-4">
            <img
              src={dress}
              alt="dress"
              style={{ width: '100%' }}
              className="rounded-[15px] shadow-md"
            />

            <ProductCarousel cards={dresses} />
          </div>
        </div>
        <div
          id="watches"
          ref={sectionRefs.watches}
          style={{ borderBottom: '1px solid #ccc' }}
        >
          <h2 className="font-poppins-semibold  text-xl mb-[10px] pt-[50px]">
            Watches
          </h2>
          <div className="grid grid-rows">
            <img
              src={wWatches}
              alt="SelfCare"
              style={{ width: '100%' }}
              className="rounded-[15px] shadow-md"
            />
            <ProductCarousel cards={watchess} />
          </div>
        </div>
        <div
          id="fragrances"
          ref={sectionRefs.fragrances}
          style={{ borderBottom: '1px solid #ccc' }}
        >
          <h2 className="font-poppins-semibold  text-xl mb-[10px] pt-[50px]">
            Fragrances
          </h2>
          <div className="grid grid-cols-[1.3fr_3fr] gap-4">
            <img
              src={wFragrances}
              alt="Fragrances"
              style={{ width: '100%' }}
              className="rounded-[15px] shadow-md"
            />

            <ProductCarousel cards={fragrancess} />
          </div>
        </div>
        <div id="shoes" ref={sectionRefs.shoes}>
          <h2 className="font-poppins-semibold  text-xl mb-[5px]">Shoes </h2>
          <div className="grid grid-cols-[3fr_1.3fr] gap-4">
            <ProductCarousel cards={shoess} />
            <img
              src={wShoes}
              alt="shoes"
              style={{ width: '100%' }}
              className="rounded-[15px] shadow-md"
            />
          </div>
        </div>

        <div
          id="Make-ups"
          ref={sectionRefs.Makeups}
          style={{ borderBottom: '1px solid #ccc' }}
        >
          <h2 className="font-poppins-semibold  text-xl mb-[10px] pt-[50px]">
            Make-ups
          </h2>
          <div className="grid grid-rows">
            <img
              src={makeup2}
              alt="Make-ups"
              style={{ width: '100%' }}
              className="rounded-[15px] shadow-md"
            />
            <ProductCarousel cards={makeups} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WomenProducts
