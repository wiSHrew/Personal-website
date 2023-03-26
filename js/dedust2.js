import * as THREE from './three.module.js';
import { OrbitControls } from './OrbitControls.js';
import { GLTFLoader } from './GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,10,1000);
const renderer = new THREE.WebGLRenderer();
scene.background = new THREE.Color( 0xB9F3FC );
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const gltfLoader = new GLTFLoader();
const controls = new OrbitControls( camera, renderer.domElement );

let stars, starGeo;

/*     TEXTURE     */
const groundTexture = new THREE.TextureLoader().load( "assets/textures/ground.jpg" );
groundTexture.wrapS = THREE.RepeatWrapping;
groundTexture.wrapT = THREE.RepeatWrapping;
groundTexture.repeat.set( 5, 6 );

const longwallTexture = new THREE.TextureLoader().load( "assets/textures/wall.jpg" );
longwallTexture.wrapS = THREE.RepeatWrapping;
longwallTexture.wrapT = THREE.RepeatWrapping;
longwallTexture.repeat.set( 5, 1 );

const elevatorwallTexture = new THREE.TextureLoader().load( "assets/textures/wall.jpg" );
elevatorwallTexture.wrapS = THREE.RepeatWrapping;
elevatorwallTexture.wrapT = THREE.RepeatWrapping;
elevatorwallTexture.repeat.set( 2, 4 );

const verylongwallTexture = new THREE.TextureLoader().load( "assets/textures/wall.jpg" );
verylongwallTexture.wrapS = THREE.RepeatWrapping;
verylongwallTexture.wrapT = THREE.RepeatWrapping;
verylongwallTexture.repeat.set( 6, 4 );

const wallTexture = new THREE.TextureLoader().load( "assets/textures/wall.jpg" );
wallTexture.wrapS = THREE.RepeatWrapping;
wallTexture.wrapT = THREE.RepeatWrapping;
wallTexture.repeat.set( 4, 4 );

/*     PARTICLES     */

particles();
function particles() 
{
    const points = [];

    let x = 6.5;
    let y = 10.5;
    let z = -7;

    for (let i = 0; i < 300; i++) 
    {
        let star = new THREE.Vector3(
            Math.floor(Math.random() * (x - x + 1)) + x,
            Math.floor(Math.random() * (y - y + 1)) + y,
            Math.floor(Math.random() * (z - z + 1)) + z
        );
        points.push(star);
    }

    starGeo = new THREE.BufferGeometry().setFromPoints(points);

    let starMaterial = new THREE.PointsMaterial(
    {
        color: 0x000000,
        size: 0.5,
    });

    stars = new THREE.Points(starGeo, starMaterial);
    stars.sortParticles = true;
    scene.add(stars);
};

function animateParticles() {
    starGeo.verticesNeedUpdate = true;
    let velocity = new THREE.Vector3(
        Math.random() * .05 - .05/2,
        Math.random() * .05 - .05/2,
        Math.random() * .05 - .05/2
    );
    velocity.multiplyScalar(Math.random() * Math.random() * 2);

    
};


const LongGroundposition = [22.5,4.94999981,-28]
const LongGroundrotation = [0,0,0]
const LongGroundscale = [15,1,40]
const LongGroundG = new THREE.BoxGeometry( LongGroundscale[0], LongGroundscale[1], LongGroundscale[2] );
const LongGroundM = new THREE.MeshStandardMaterial({color: 0xB99B6B, map: groundTexture});
const LongGround = new THREE.Mesh( LongGroundG, LongGroundM );
LongGround.receiveShadow = true;
LongGround.castShadow = true;
scene.add( LongGround );
//position
LongGround.position.x = LongGroundposition[0];
LongGround.position.y = LongGroundposition[1];
LongGround.position.z = LongGroundposition[2];
//rotation
LongGround.rotation.x = LongGroundrotation[0];
LongGround.rotation.y = LongGroundrotation[1];
LongGround.rotation.z = LongGroundrotation[2];

const BackSiteGroundposition = [15,10.5,19.7199993]
const BackSiteGroundrotation = [0,0,0]
const BackSiteGroundscale = [30,1,15]
const BackSiteGroundG = new THREE.BoxGeometry( BackSiteGroundscale[0], BackSiteGroundscale[1], BackSiteGroundscale[2] );
const BackSiteGroundM = new THREE.MeshStandardMaterial({color: 0xB99B6B, map: groundTexture});
const BackSiteGround = new THREE.Mesh( BackSiteGroundG, BackSiteGroundM );
BackSiteGround.receiveShadow = true;
BackSiteGround.castShadow = true;
scene.add( BackSiteGround );
//position
BackSiteGround.position.x = BackSiteGroundposition[0];
BackSiteGround.position.y = BackSiteGroundposition[1];
BackSiteGround.position.z = BackSiteGroundposition[2];
//rotation
BackSiteGround.rotation.x = BackSiteGroundrotation[0];
BackSiteGround.rotation.y = BackSiteGroundrotation[1];
BackSiteGround.rotation.z = BackSiteGroundrotation[2];


const BackToSiteRampposition = [7.5,9.93000031,10.1999998]
const BackToSiteRamprotation = [Math.PI/-12,0,0]
const BackToSiteRampscale = [15,1,4.5]
const BackToSiteRampG = new THREE.BoxGeometry( BackToSiteRampscale[0], BackToSiteRampscale[1], BackToSiteRampscale[2] );
const BackToSiteRampM = new THREE.MeshStandardMaterial({color: 0xB99B6B, map: groundTexture});
const BackToSiteRamp = new THREE.Mesh( BackToSiteRampG, BackToSiteRampM );
BackToSiteRamp.receiveShadow = true;
BackToSiteRamp.castShadow = true;
scene.add( BackToSiteRamp );
//position
BackToSiteRamp.position.x = BackToSiteRampposition[0];
BackToSiteRamp.position.y = BackToSiteRampposition[1];
BackToSiteRamp.position.z = BackToSiteRampposition[2];
//rotation
BackToSiteRamp.rotation.x = BackToSiteRamprotation[0];
BackToSiteRamp.rotation.y = BackToSiteRamprotation[1];
BackToSiteRamp.rotation.z = BackToSiteRamprotation[2];

const SiteGroundposition = [0,9.5,0]
const SiteGroundrotation = [0,0,0]
const SiteGroundscale = [30,1,17]
const SiteGroundG = new THREE.BoxGeometry( SiteGroundscale[0], SiteGroundscale[1], SiteGroundscale[2] );
const SiteGroundM = new THREE.MeshStandardMaterial({color: 0xB99B6B, map: groundTexture});
const SiteGround = new THREE.Mesh( SiteGroundG, SiteGroundM );
SiteGround.receiveShadow = true;
SiteGround.castShadow = true;
scene.add( SiteGround );
//position
SiteGround.position.x = SiteGroundposition[0];
SiteGround.position.y = SiteGroundposition[1];
SiteGround.position.z = SiteGroundposition[2];
//rotation
SiteGround.rotation.x = SiteGroundrotation[0];
SiteGround.rotation.y = SiteGroundrotation[1];
SiteGround.rotation.z = SiteGroundrotation[2];

const LongToBackRampposition = [22.5,7.73999977,2]
const LongToBackRamprotation = [Math.PI/-12,0,0]
const LongToBackRampscale = [15,1,21.5]
const LongToBackRampG = new THREE.BoxGeometry( LongToBackRampscale[0], LongToBackRampscale[1], LongToBackRampscale[2] );
const LongToBackRampM = new THREE.MeshStandardMaterial({color: 0xB99B6B, map: groundTexture});
const LongToBackRamp = new THREE.Mesh( LongToBackRampG, LongToBackRampM );
LongToBackRamp.receiveShadow = true;
LongToBackRamp.castShadow = true;
scene.add( LongToBackRamp );
//position
LongToBackRamp.position.x = LongToBackRampposition[0];
LongToBackRamp.position.y = LongToBackRampposition[1];
LongToBackRamp.position.z = LongToBackRampposition[2];
//rotation
LongToBackRamp.rotation.x = LongToBackRamprotation[0];
LongToBackRamp.rotation.y = LongToBackRamprotation[1];
LongToBackRamp.rotation.z = LongToBackRamprotation[2];

const LongToSiteWallposition = [14.501,8,2]
const LongToSiteWallrotation = [0,0,0]
const LongToSiteWallscale = [1,8,21]
const LongToSiteWallG = new THREE.BoxGeometry( LongToSiteWallscale[0], LongToSiteWallscale[1], LongToSiteWallscale[2] );
const LongToSiteWallM = new THREE.MeshStandardMaterial({color: 0xB99B6B, map: verylongwallTexture});
const LongToSiteWall = new THREE.Mesh( LongToSiteWallG, LongToSiteWallM );
LongToSiteWall.receiveShadow = true;
LongToSiteWall.castShadow = true;
scene.add( LongToSiteWall );
//position
LongToSiteWall.position.x = LongToSiteWallposition[0];
LongToSiteWall.position.y = LongToSiteWallposition[1];
LongToSiteWall.position.z = LongToSiteWallposition[2];
//rotation
LongToSiteWall.rotation.x = LongToSiteWallrotation[0];
LongToSiteWall.rotation.y = LongToSiteWallrotation[1];
LongToSiteWall.rotation.z = LongToSiteWallrotation[2];

const kqlyRampposition = [7.28999996,2.86999989,-22]
const kqlyRamprotation = [0,0,Math.PI/12]
const kqlyRampscale = [16.25,1,13]
const kqlyRampG = new THREE.BoxGeometry( kqlyRampscale[0], kqlyRampscale[1], kqlyRampscale[2] );
const kqlyRampM = new THREE.MeshStandardMaterial({color: 0xB99B6B, map: groundTexture});
const kqlyRamp = new THREE.Mesh( kqlyRampG, kqlyRampM );
kqlyRamp.receiveShadow = true;
kqlyRamp.castShadow = true;
scene.add( kqlyRamp );
//position
kqlyRamp.position.x = kqlyRampposition[0];
kqlyRamp.position.y = kqlyRampposition[1];
kqlyRamp.position.z = kqlyRampposition[2];
//rotation
kqlyRamp.rotation.x = kqlyRamprotation[0];
kqlyRamp.rotation.y = kqlyRamprotation[1];
kqlyRamp.rotation.z = kqlyRamprotation[2];

const PlantExtendToLongWallposition = [14.501,8,-12]
const PlantExtendToLongWallrotation = [0,0,0]
const PlantExtendToLongWallscale = [1,8,7]
const PlantExtendToLongWallG = new THREE.BoxGeometry( PlantExtendToLongWallscale[0], PlantExtendToLongWallscale[1], PlantExtendToLongWallscale[2] );
const PlantExtendToLongWallM = new THREE.MeshStandardMaterial({color: 0xB99B6B, map: elevatorwallTexture});
const PlantExtendToLongWall = new THREE.Mesh( PlantExtendToLongWallG, PlantExtendToLongWallM );
PlantExtendToLongWall.receiveShadow = true;
PlantExtendToLongWall.castShadow = true;
scene.add( PlantExtendToLongWall );
//position
PlantExtendToLongWall.position.x = PlantExtendToLongWallposition[0];
PlantExtendToLongWall.position.y = PlantExtendToLongWallposition[1];
PlantExtendToLongWall.position.z = PlantExtendToLongWallposition[2];
//rotation
PlantExtendToLongWall.rotation.x = PlantExtendToLongWallrotation[0];
PlantExtendToLongWall.rotation.y = PlantExtendToLongWallrotation[1];
PlantExtendToLongWall.rotation.z = PlantExtendToLongWallrotation[2];

const kqlyWallposition = [7.5,6,-15.005]
const kqlyWallrotation = [0,0,0]
const kqlyWallscale = [15,12,1]
const kqlyWallG = new THREE.BoxGeometry( kqlyWallscale[0], kqlyWallscale[1], kqlyWallscale[2] );
const kqlyWallM = new THREE.MeshStandardMaterial({color: 0xB99B6B, map: wallTexture});
const kqlyWall = new THREE.Mesh( kqlyWallG, kqlyWallM );
kqlyWall.receiveShadow = true;
kqlyWall.castShadow = true;
scene.add( kqlyWall );
//position
kqlyWall.position.x = kqlyWallposition[0];
kqlyWall.position.y = kqlyWallposition[1];
kqlyWall.position.z = kqlyWallposition[2];
//rotation
kqlyWall.rotation.x = kqlyWallrotation[0];
kqlyWall.rotation.y = kqlyWallrotation[1];
kqlyWall.rotation.z = kqlyWallrotation[2];

const BoostWallposition = [-7.5,6,-8.001]
const BoostWallrotation = [0,0,0]
const BoostWallscale = [16,12,1]
const BoostWallG = new THREE.BoxGeometry( BoostWallscale[0], BoostWallscale[1], BoostWallscale[2] );
const BoostWallM = new THREE.MeshStandardMaterial({color: 0xB99B6B, map: wallTexture});
const BoostWall = new THREE.Mesh( BoostWallG, BoostWallM );
BoostWall.receiveShadow = true;
BoostWall.castShadow = true;
scene.add( BoostWall );
//position
BoostWall.position.x = BoostWallposition[0];
BoostWall.position.y = BoostWallposition[1];
BoostWall.position.z = BoostWallposition[2];
//rotation
BoostWall.rotation.x = BoostWallrotation[0];
BoostWall.rotation.y = BoostWallrotation[1];
BoostWall.rotation.z = BoostWallrotation[2];

const ShortGroundposition = [-22.5,9.5,-10]
const ShortGroundrotation = [0,0,0]
const ShortGroundscale = [15,1,37]
const ShortGroundG = new THREE.BoxGeometry( ShortGroundscale[0], ShortGroundscale[1], ShortGroundscale[2] );
const ShortGroundM = new THREE.MeshStandardMaterial({color: 0xB99B6B, map: groundTexture});
const ShortGround = new THREE.Mesh( ShortGroundG, ShortGroundM );
ShortGround.receiveShadow = true;
ShortGround.castShadow = true;
scene.add( ShortGround );
//position
ShortGround.position.x = ShortGroundposition[0];
ShortGround.position.y = ShortGroundposition[1];
ShortGround.position.z = ShortGroundposition[2];
//rotation
ShortGround.rotation.x = ShortGroundrotation[0];
ShortGround.rotation.y = ShortGroundrotation[1];
ShortGround.rotation.z = ShortGroundrotation[2];

const ShortWallposition = [-15.499,10.5,-18.001]
const ShortWallrotation = [0,0,0]
const ShortWallscale = [1,3,21]
const ShortWallG = new THREE.BoxGeometry( ShortWallscale[0], ShortWallscale[1], ShortWallscale[2] );
const ShortWallM = new THREE.MeshStandardMaterial({color: 0xB99B6B, map: longwallTexture});
const ShortWall = new THREE.Mesh( ShortWallG, ShortWallM );
ShortWall.receiveShadow = true;
ShortWall.castShadow = true;
scene.add( ShortWall );
//position
ShortWall.position.x = ShortWallposition[0];
ShortWall.position.y = ShortWallposition[1];
ShortWall.position.z = ShortWallposition[2];
//rotation
ShortWall.rotation.x = ShortWallrotation[0];
ShortWall.rotation.y = ShortWallrotation[1];
ShortWall.rotation.z = ShortWallrotation[2];

const PlantExtendposition = [7.5,9.5,-12]
const PlantExtendrotation = [0,0,0]
const PlantExtendscale = [15,1,7]
const PlantExtendG = new THREE.BoxGeometry( PlantExtendscale[0], PlantExtendscale[1], PlantExtendscale[2] );
const PlantExtendM = new THREE.MeshStandardMaterial({color: 0xB99B6B, map: groundTexture});
const PlantExtend = new THREE.Mesh( PlantExtendG, PlantExtendM );
PlantExtend.receiveShadow = true;
PlantExtend.castShadow = true;
scene.add( PlantExtend );
//position
PlantExtend.position.x = PlantExtendposition[0];
PlantExtend.position.y = PlantExtendposition[1];
PlantExtend.position.z = PlantExtendposition[2];
//rotation
PlantExtend.rotation.x = PlantExtendrotation[0];
PlantExtend.rotation.y = PlantExtendrotation[1];
PlantExtend.rotation.z = PlantExtendrotation[2];

const CTGroundposition = [-7.94999981,0.813000023,-18.5]
const CTGroundrotation = [0,0,0 ]
const CTGroundscale = [15,1,20]
const CTGroundG = new THREE.BoxGeometry( CTGroundscale[0], CTGroundscale[1], CTGroundscale[2] );
const CTGroundM = new THREE.MeshStandardMaterial({color: 0xB99B6B, map: groundTexture});
const CTGround = new THREE.Mesh( CTGroundG, CTGroundM );
CTGround.receiveShadow = true;
CTGround.castShadow = true;
scene.add( CTGround );
//position
CTGround.position.x = CTGroundposition[0];
CTGround.position.y = CTGroundposition[1];
CTGround.position.z = CTGroundposition[2];
//rotation
CTGround.rotation.x = CTGroundrotation[0];
CTGround.rotation.y = CTGroundrotation[1];
CTGround.rotation.z = CTGroundrotation[2];

const CarGroundposition = [34,4.94999981,-28.5]
const CarGroundrotation = [0,0,0]
const CarGroundscale = [8,1,20]
const CarGroundG = new THREE.BoxGeometry( CarGroundscale[0], CarGroundscale[1], CarGroundscale[2] );
const CarGroundM = new THREE.MeshStandardMaterial({color: 0xB99B6B, map: groundTexture});
const CarGround = new THREE.Mesh( CarGroundG, CarGroundM );
CarGround.receiveShadow = true;
CarGround.castShadow = true;
scene.add( CarGround );
//position
CarGround.position.x = CarGroundposition[0];
CarGround.position.y = CarGroundposition[1];
CarGround.position.z = CarGroundposition[2];
//rotation
CarGround.rotation.x = CarGroundrotation[0];
CarGround.rotation.y = CarGroundrotation[1];
CarGround.rotation.z = CarGroundrotation[2];

const CTCutOffposition = [-15.451,4.5,-18.001]
const CTCutOffrotation = [0,0,0]
const CTCutOffscale = [1,9,21]
const CTCutOffG = new THREE.BoxGeometry( CTCutOffscale[0], CTCutOffscale[1], CTCutOffscale[2] );
const CTCutOffM = new THREE.MeshStandardMaterial({color: 0x000000});
const CTCutOff = new THREE.Mesh( CTCutOffG, CTCutOffM );
CTCutOff.receiveShadow = true;
CTCutOff.castShadow = true;
scene.add( CTCutOff );
//position
CTCutOff.position.x = CTCutOffposition[0];
CTCutOff.position.y = CTCutOffposition[1];
CTCutOff.position.z = CTCutOffposition[2];
//rotation
CTCutOff.rotation.x = CTCutOffrotation[0];
CTCutOff.rotation.y = CTCutOffrotation[1];
CTCutOff.rotation.z = CTCutOffrotation[2];


const ElevatorWallposition = [0,6,-12.001]
const ElevatorWallrotation = [0,0,0]
const ElevatorWallscale = [1,12,7]
const ElevatorWallG = new THREE.BoxGeometry( ElevatorWallscale[0], ElevatorWallscale[1], ElevatorWallscale[2] );
const ElevatorWallM = new THREE.MeshStandardMaterial({color: 0xB99B6B, map: elevatorwallTexture});
const ElevatorWall = new THREE.Mesh( ElevatorWallG, ElevatorWallM );
ElevatorWall.receiveShadow = true;
ElevatorWall.castShadow = true;
scene.add( ElevatorWall );
//position
ElevatorWall.position.x = ElevatorWallposition[0];
ElevatorWall.position.y = ElevatorWallposition[1];
ElevatorWall.position.z = ElevatorWallposition[2];
//rotation
ElevatorWall.rotation.x = ElevatorWallrotation[0];
ElevatorWall.rotation.y = ElevatorWallrotation[1];
ElevatorWall.rotation.z = ElevatorWallrotation[2];

gltfLoader.load( 'assets/bomb/scene.gltf', function( gltf ) {
    gltf.scene.position.set(6.50118732,10.6499996,-6.86437893)
    gltf.scene.scale.set(0.5,0.5,0.5)
    gltf.scene.traverse( function( node ) {

        if ( node.isMesh ) { node.castShadow = true; }

    } );

    scene.add( gltf.scene );

} );

gltfLoader.load( 'assets/car gen/scene.gltf', function( gltf ) {
    gltf.scene.position.set(32,5.5999999,-28.5)
    gltf.scene.rotation.y = Math.PI/2;
    gltf.scene.scale.set(0.0399999991,0.0399999991,0.0399999991)
    gltf.scene.traverse( function( node ) {

        if ( node.isMesh ) { node.castShadow = true; }

    } );

    scene.add( gltf.scene );

} );



gltfLoader.load( 'assets/airdrop/scene.gltf', function( gltf ) {
    gltf.scene.position.set(17.2600002,7,-12.79)
    gltf.scene.rotation.y = Math.PI/1;
    gltf.scene.scale.set(2.5,2.5,2.5)
    gltf.scene.traverse( function( node ) {

        if ( node.isMesh ) { node.castShadow = true; }

    } );

    scene.add( gltf.scene );

} );

gltfLoader.load( 'assets/crate box/scene.gltf', function( gltf ) {
    gltf.scene.position.set(0.0700000003,10,-6.01999998)
    gltf.scene.scale.set(0.0500000007,0.0500000007,0.0500000007)
    gltf.scene.traverse( function( node ) {

        if ( node.isMesh ) { node.castShadow = true; }

    } );

    scene.add( gltf.scene );

} );

gltfLoader.load( 'assets/crate box/scene.gltf', function( gltf ) {
    gltf.scene.position.set(0.280000001,10,-2.83999991)
    gltf.scene.rotation.y = .15;
    gltf.scene.scale.set(0.0500000007,0.0500000007,0.0500000007)
    gltf.scene.traverse( function( node ) {

        if ( node.isMesh ) { node.castShadow = true; }

    } );

    scene.add( gltf.scene );

} );

gltfLoader.load( 'assets/crate box/scene.gltf', function( gltf ) {
    gltf.scene.position.set(12.5,10,-4.69999981)
    gltf.scene.scale.set(0.0500000007,0.0500000007,0.0500000007)
    gltf.scene.traverse( function( node ) {

        if ( node.isMesh ) { node.castShadow = true; }

    } );

    scene.add( gltf.scene );

} );

gltfLoader.load( 'assets/trash can/scene.gltf', function( gltf ) {
    gltf.scene.position.set(-19.1399994,0.870000005,-10.4399996)
    gltf.scene.rotation.y = Math.PI*1;
    gltf.scene.scale.set(2.5,2.5,2.5)
    gltf.scene.traverse( function( node ) {

        if ( node.isMesh ) { node.castShadow = true; }

    } );

    scene.add( gltf.scene );

} );

gltfLoader.load( 'assets/oil_barrel/scene.gltf', function( gltf ) {
    gltf.scene.position.set(12.8434334,11,16.6)
    gltf.scene.scale.set(5,5,5)
    gltf.scene.traverse( function( node ) {

        if ( node.isMesh ) { node.castShadow = true; }

    } );

    scene.add( gltf.scene );

} );

gltfLoader.load( 'assets/crate box/scene.gltf', function( gltf ) {
    gltf.scene.position.set(-8.98999977,10,6.90999985)
    gltf.scene.scale.set(0.0500000007,0.0500000007,0.0500000007)
    gltf.scene.traverse( function( node ) {

        if ( node.isMesh ) { node.castShadow = true; }

    } );

    scene.add( gltf.scene );

} );

gltfLoader.load( 'assets/crate box/scene.gltf', function( gltf ) {
    gltf.scene.position.set(-12.0699997,10,6.90999985)
    gltf.scene.scale.set(0.0500000007,0.0500000007,0.0500000007)
    gltf.scene.traverse( function( node ) {

        if ( node.isMesh ) { node.castShadow = true; }

    } );

    scene.add( gltf.scene );

} );

gltfLoader.load( 'assets/crate box/scene.gltf', function( gltf ) {
    gltf.scene.position.set(-12.0699997,13,6.90999985)
    gltf.scene.scale.set(0.0500000007,0.0500000007,0.0500000007)
    gltf.scene.traverse( function( node ) {

        if ( node.isMesh ) { node.castShadow = true; }

    } );

    scene.add( gltf.scene );

} );

gltfLoader.load( 'assets/barrels/scene.gltf', function( gltf ) {
    gltf.scene.position.set(-17,10,-5)
    gltf.scene.rotation.y = Math.PI/1;
    gltf.scene.scale.set(.08,.08,.08)
    gltf.scene.traverse( function( node ) {

        if ( node.isMesh ) { node.castShadow = true; }

    } );

    scene.add( gltf.scene );

} );

/*+++++ LIGHTS +++++*/
//world light
const AmbientLight = new THREE.AmbientLight( 0x404040, 10);
scene.add( AmbientLight );
const sun1 = new THREE.PointLight( 0xffffff, 1 );
sun1.position.set(0,50,0);
sun1.castShadow = true;
scene.add( sun1 );

camera.position.y = 50;
camera.position.x = 50;

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate() {
    requestAnimationFrame(animate);
    animateParticles();
    
    renderer.render(scene, camera);
  }
  
  animate();