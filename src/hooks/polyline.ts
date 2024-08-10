export function Polyline(
    map: kakao.maps.Map,
    path: (kakao.maps.LatLng | null)[]
) {
    return new kakao.maps.Polyline({
        map: map,
        path: path,
        strokeWeight: 6,
        strokeColor: '#0080ff',
        strokeOpacity: 0.7,
        strokeStyle: 'solid'
    })
}